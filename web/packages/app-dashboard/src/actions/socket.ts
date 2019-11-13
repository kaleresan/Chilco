import { SocketActionType } from '../constants/socket';

export type SOCKET_SET_TOKEN_ACTION_TYPE = 'SOCKET_SET_TOKEN_ACTION';
export const SOCKET_SET_TOKEN_ACTION: SOCKET_SET_TOKEN_ACTION_TYPE =
  'SOCKET_SET_TOKEN_ACTION';

export type SOCKET_REFRESH_TOKEN_ACTION_TYPE = 'SOCKET_REFRESH_TOKEN_ACTION';
export const SOCKET_REFRESH_TOKEN_ACTION: SOCKET_REFRESH_TOKEN_ACTION_TYPE =
  'SOCKET_REFRESH_TOKEN_ACTION';

export type SOCKET_VALIDATE_TOKEN_ACTION_TYPE = 'SOCKET_VALIDATE_TOKEN_ACTION';
export const SOCKET_VALIDATE_TOKEN_ACTION: SOCKET_VALIDATE_TOKEN_ACTION_TYPE =
  'SOCKET_VALIDATE_TOKEN_ACTION';

export type EMIT_SOCKET_ACTION_TYPE = 'EMIT_SOCKET_ACTION';
export const EMIT_SOCKET_ACTION: EMIT_SOCKET_ACTION_TYPE = 'EMIT_SOCKET_ACTION';

export const setToken = (token: string) => ({
  type: SOCKET_SET_TOKEN_ACTION,
  payload: { token }
});
export const validateToken = (token: string) => ({
  type: SOCKET_VALIDATE_TOKEN_ACTION,
  payload: { token }
});

export const emitSocketAction = (type: SocketActionType, payload: any) => ({
  type: EMIT_SOCKET_ACTION,
  payload: {
    type,
    payload
  }
});
