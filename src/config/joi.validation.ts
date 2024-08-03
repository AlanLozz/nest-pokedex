import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
  PORT: Joi.required().default(5001),
  MONGO_URI: Joi.required(),
  DEFAULT_LIMIT: Joi.number().default(2),
});
