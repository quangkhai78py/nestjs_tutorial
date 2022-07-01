export const auth_error = {
  PASSWORD_MIN_LENGTH: 'Password must be at least 8 characters long',
  PASSWORD_MAX_LENGTH: 'Password can be max 35 characters long',
  PASSWORD_INCLUDE: `Password must have uppercase, lowercase, number and special characters: !~@#$%^&*-=\`|\\(){}[]:;\"'<>,?/`,
  WRONG_CONFIRMATION_CODE: `Confirmation code doesn't match`,
  CONFIRMATION_CODE_LENGTH: `Confirmation code's length must equal 5`,
  DATE_OF_BIRTH_ERROR: `wrong date of birth`,
  CONFIRMATION_CODE_EXPIRED: `Confirmation code expired, please send another request`,
  PASSWORD_NOT_MATCH: `Password and Confirm password do not match. Please try again.`,
  VERIFY2FA_TOKEN: `The token invalid`,
  DUPLICATE_EMAIL: 'This mail address already exists',
  RECAPTCHA_INVALID: 'Please perform man-machine certification.',
  USER_INVALID: 'Email or Password is incorrect. Please try again!',
  USER_NOT_FOUND: 'User not found',
  URL_INVALID: 'Url invalid',
  LANGUAGE_NOT_FOUND: 'Language not found',
  EMAIL_EXIST: 'email already existed',
  OLD_PASSWORD: 'Input new Password same Old Password. Please try again!',
  WRONG_PASSWORD: 'Current Password is incorrect. Please try again!',
};

export const redis_prefix = 'jwt_label_uno';
