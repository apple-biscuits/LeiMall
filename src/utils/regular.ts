// 验证手机号格式的正则
export const PHONE_REG =
  /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/

// 用户名正则
export const USERNAME_REG = /^[A-Za-z0-9]{6,18}$/

// 密码正则
export const PASSWORD_REG = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$#%&*!?.]).{8,16}$/
// 验证码正则
export const CODE_REG = /^\d{6}$/