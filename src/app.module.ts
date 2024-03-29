import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { env } from './config/env/env';
import { validationSchema } from './config/env/validator';
import { HttpModule } from '@nestjs/axios';
import { getHttpConfig } from './config/http/http';
import { WinstonModule } from 'nest-winston';
import { winstonTransports } from './config/logger/logger';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { JwtModule } from '@nestjs/jwt';
import { getJwtConfig } from './config/jwt/jwt';
import { PrismaModule } from './config/orm/prisma/module/prisma.module';
import { EncryptModule } from './modules/encrypt/module/encrypt.module';
import { UsersModule } from './modules/users/module/users.module';
import { AuthModule } from './modules/auth/module/auth.module';
import { RedisModule } from './modules/cache/module/redis.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      load: [env],
      validationSchema,
      validationOptions: {
        abortEarly: true,
      },
    }),
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService): object =>
        getHttpConfig(configService),
      inject: [ConfigService],
    }),
    WinstonModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService): any => ({
        transports: winstonTransports(configService),
      }),
      inject: [ConfigService],
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService): object =>
        getJwtConfig(configService),
      inject: [ConfigService],
    }),
    PrismaModule,
    EncryptModule,
    UsersModule,
    AuthModule,
    RedisModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
