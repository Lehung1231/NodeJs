import Joi from "joi";
export const signupSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string().email().required().messages({
    "string.email": "Email không hợp lệ",
    "string.empty": "Email không trống",
    "string.required": "Email thì cần thiết",
  }),
  password: Joi.string().required().min(6).messages({
    "string.empty": "Password không hợp lệ",
    "any.required": "Password không trống",
    "string.min": "Password  phải có ít nhất {#limit} ký tự",
  }),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required().messages({
    "any.only": "Mật khẩu không khớp",
    "string.empty": "Xác nhận mật khẩu không trống",
    "string.required": "Xác nhận mật khẩu là bắt buộc",
  }),
});