import { APPROVE_DEVICE_TYPE } from './desktopDevice';
import { GET_CURRENT_USER_ACTION_TYPE } from './account';
import { LOGIN_ACTION_TYPE, REGISTER_ACTION_TYPE } from './auth';

export type FetchActionType =
  // Auth
  | LOGIN_ACTION_TYPE
  | REGISTER_ACTION_TYPE
  // Account
  | GET_CURRENT_USER_ACTION_TYPE
  // Desktop Device
  | APPROVE_DEVICE_TYPE;

export * from './auth';
export * from './account';
export * from './desktopDevice';
