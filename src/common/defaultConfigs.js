import { EMAIL_ONLY } from './passwordSignupFields';
import { hashPassword, compareHash } from '../server/encryption';

export const defaultSharedConfig = {
  sendVerificationEmail: false,
  forbidClientAccountCreation: false,
  restrictCreationByEmailDomain: null,
  loginExpirationInDays: 90,
  passwordResetTokenExpirationInDays: 3,
  passwordEnrollTokenExpirationInDays: 30,
  passwordSignupFields: EMAIL_ONLY,
  minimumPasswordLength: 7,
  path: '/accounts',
};

export const defaultClientConfig = {
  ...defaultSharedConfig,
  server: '',
  title: '',
  requestPermissions: [],
  requestOfflineToken: {},
  forceApprovalPrompt: {},
  requireEmailVerification: false,
  loginPath: '/',
  signUpPath: null,
  resetPasswordPath: null,
  profilePath: '/',
  changePasswordPath: null,
  homeRoutePath: '/',
  // TODO enable all of these
  // onSubmitHook: () => {},
  // onPreSignUpHook: () => new Promise(resolve => resolve()),
  // onPostSignUpHook: () => {},
  // onEnrollAccountHook: () => redirect(`${Accounts.ui._options.loginPath}`),
  // onResetPasswordHook: () => redirect(`${Accounts.ui._options.loginPath}`),
  // onVerifyEmailHook: () => redirect(`${Accounts.ui._options.profilePath}`),
  // onSignedInHook: () => redirect(`${Accounts.ui._options.homeRoutePath}`),
  // onSignedOutHook: () => redirect(`${Accounts.ui._options.homeRoutePath}`),
};

export const defaultServerConfig = {
  ...defaultSharedConfig,
  hashPassword,
  compareHash,
  // TODO Investigate oauthSecretKey
  // oauthSecretKey
};
