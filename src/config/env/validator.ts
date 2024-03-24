import Joi from 'joi';

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string().required(),
  SERVER_NAME: Joi.string().required(),
  API_HOST: Joi.string().required(),
  API_PORT: Joi.number().required(),
  HTTP_TIMEOUT: Joi.number().required(),
  HTTP_MAX_REDIRECTS: Joi.number().required(),
  RDB_HOST: Joi.string().required(),
  RDB_PORT: Joi.number().required(),
  RDB_USERNAME: Joi.string().required(),
  RDB_PASSWORD: Joi.string().required(),
  RDB_DATABASE: Joi.string().required(),
  RDB_SYNCHRONIZE: Joi.boolean().required(),
  RDB_LOGGING: Joi.boolean().required(),
  RDB_URL: Joi.string().required(),
  CACHE_HOST: Joi.string().required(),
  CACHE_PORT: Joi.number().required(),
  CACHE_PASSWORD: Joi.string().required(),
  CACHE_TTL: Joi.number().required(),
  ENCRYPT_SALT: Joi.number().required(),
  JWT_ACCESS_SECRET: Joi.string().required(),
  JWT_ACCESS_EXPIRES_IN: Joi.number().required(),
  JWT_REFRESH_SECRET: Joi.string().required(),
  JWT_REFRESH_EXPIRES_IN: Joi.number().required(),
  JWT_REFRESH_PREFIX: Joi.string().required(),
  AWS_REGION: Joi.string().required(),
  AWS_ACCESS_KEY_ID: Joi.string().required(),
  AWS_SECRET_ACCESS_KEY: Joi.string().required(),
  AWS_SQS_EMAIL_NAME: Joi.string().required(),
  AWS_SQS_EMAIL_QUEUE_URL: Joi.string().required(),
  AWS_SQS_EMAIL_REGION: Joi.string().required(),
});
