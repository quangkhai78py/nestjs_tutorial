export const user_error = {
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
export const EXPIRED_TIME = 10;
export const MS_OF_DAY = 86400000;
export const PASSWORD_REG = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
export const REQUEST_CHANGE_EMAIL_SUCCESS = `Change Email
A notification has been sent to your new email address.
Please click the verification URL to completely change your email address.
※Please note that the URL is valid for one hour. If it expires, please redo the process in order to get a new verification URL.`;
export const USER_UPDATED_SUCCESSFULLY = `Your profile has been updated.`;
export const USER_CREATED_SUCCESSFULLY = `Account has been created.`;
export const PASSWORD_UPDATED = `Password has been changed`;
