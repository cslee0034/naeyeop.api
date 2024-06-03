import { Prisma } from '@prisma/client';
import { BaseErrorHandler } from './base.error.handler';
import { Logger } from 'winston';

describe('ThrownErrorHandler', () => {
  let baseErrorHandler: BaseErrorHandler;
  const logger = {
    query: jest.fn(),
    info: jest.fn(),
    error: jest.fn(),
    warn: jest.fn(),
  } as unknown as Logger;

  beforeEach(() => {
    baseErrorHandler = new BaseErrorHandler(logger);
  });

  describe('handleThrownError', () => {
    it('should throw Prisma.PrismaClientKnownRequestError', () => {
      const error = new Prisma.PrismaClientKnownRequestError(
        'Unique constraint failed on the email',
        {
          code: 'P2002',
          meta: {
            target: ['email'],
            value: '',
          },
        } as any,
      );

      expect(() => baseErrorHandler.handleThrownError(error)).toThrow(error);
    });

    it('should throw Prisma.PrismaClientValidationError', () => {
      const error = new Prisma.PrismaClientValidationError('', {
        meta: {
          target: [''],
          value: '',
        },
      } as any);

      expect(() => baseErrorHandler.handleThrownError(error)).toThrow(error);
    });

    it('should throw Prisma.PrismaClientInitializationError', () => {
      const error = new Prisma.PrismaClientInitializationError('', {
        meta: {
          target: [''],
          value: '',
        },
      } as any);

      expect(() => baseErrorHandler.handleThrownError(error)).toThrow(error);
    });

    it('should throw Prisma.PrismaClientRustPanicError', () => {
      const error = new Prisma.PrismaClientRustPanicError('', {
        meta: {
          target: [''],
          value: '',
        },
      } as any);

      expect(() => baseErrorHandler.handleThrownError(error)).toThrow(error);
    });

    it('should throw HttpException', () => {
      const error = new Error('Unexpected error');

      expect(() => baseErrorHandler.handleThrownError(error)).not.toThrow();
    });

    it('should throw BadRequestException', () => {
      const error = new Error('Unexpected error');

      expect(() => baseErrorHandler.handleThrownError(error)).not.toThrow();
    });

    it('should throw UnauthorizedException', () => {
      const error = new Error('Unexpected error');

      expect(() => baseErrorHandler.handleThrownError(error)).not.toThrow();
    });

    it('should throw NotFoundException', () => {
      const error = new Error('Unexpected error');

      expect(() => baseErrorHandler.handleThrownError(error)).not.toThrow();
    });

    it('should throw InternalServerErrorException', () => {
      const error = new Error('Unexpected error');

      expect(() => baseErrorHandler.handleThrownError(error)).not.toThrow();
    });

    it('should not throw error', () => {
      const error = new Error('Unexpected error');

      expect(() => baseErrorHandler.handleThrownError(error)).not.toThrow();
    });
  });

  describe('logInputs', () => {
    it('should be defined', () => {
      expect(baseErrorHandler.logInputs).toBeDefined();
    });

    it('should log inputs', () => {
      const inputs = '';

      baseErrorHandler.logInputs(inputs);

      expect(logger.warn).toHaveBeenCalledWith(
        `\ninputs: ${JSON.stringify(inputs, null, 2)}`,
      );
    });
  });
});
