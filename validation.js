const Joi = require("joi");
const validate=require('./schema');
exports.person = Joi.object()
  .keys({
    name: Joi.string()
      .min(3)
      .max(40)
      .required(),
    age: Joi.number()
      .integer()
      .min(16)
  });