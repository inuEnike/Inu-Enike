import Joi from "joi";

export const schema = Joi.object({
  fullName: Joi.string().min(3).required(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  tel: Joi.number().integer(),
  message: Joi.string().min(3).required(),
});
