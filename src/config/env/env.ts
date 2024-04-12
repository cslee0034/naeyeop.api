export const env = () => ({
  app: {
    env: process.env.NODE_ENV,
    serverName: process.env.serverName,
    protocol: process.env.API_PROTOCOL,
    host: process.env.API_HOST,
    port: +process.env.API_PORT,
  },
  client: {
    url: process.env.CLIENT_URL,
  },
  http: {
    timeout: process.env.HTTP_TIMEOUT,
    maxRedirects: process.env.HTTP_maxRedirects,
  },
  rdb: {
    host: process.env.RDB_HOST,
    port: +process.env.RDB_PORT,
    username: process.env.RDB_USERNAME,
    password: process.env.RDB_PASSWORD,
    database: process.env.RDB_DATABASE,
    synchronize: process.env.RDB_SYNCHRONIZE,
    logging: process.env.RDB_LOGGING,
    url: process.env.RDB_URL,
  },
  cache: {
    host: process.env.CACHE_HOST,
    port: process.env.CACHE_PORT,
    password: process.env.CACHE_PASSWORD,
    ttl: process.env.CACHE_TTL,
  },
  encrypt: {
    salt: process.env.ENCRYPT_SALT,
  },
  jwt: {
    access: {
      secret: process.env.JWT_ACCESS_SECRET,
      expiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
    },
    refresh: {
      secret: process.env.JWT_REFRESH_SECRET,
      expiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
      prefix: process.env.JWT_REFRESH_PREFIX,
    },
  },
  aws: {
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    sqs: {
      email: {
        name: process.env.AWS_SQS_EMAIL_NAME,
        queueUrl: process.env.AWS_SQS_EMAIL_QUEUE_URL,
        region: process.env.AWS_SQS_EMAIL_REGION,
      },
    },
  },
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  },
});
