import { GET_CURRENT_USER_ACTION_TYPE } from './account';
import { LOGIN_ACTION_TYPE } from './auth';
export type FetchActionType =
  // Auth
  | LOGIN_ACTION_TYPE
  // Account
  | GET_CURRENT_USER_ACTION_TYPE;

export * from './auth';
export * from './account';
