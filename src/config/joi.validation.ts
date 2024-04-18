import * as Joi from 'joi';

export const joiValidationSchema = Joi.object({
  // required
  PRODUCT_MONGODB_URL: Joi.string().required(),

  // default
  NODE_ENV: Joi.string().default('develop'),
  API_PORT: Joi.number().default(5000),
});
