import { WebsocketType } from '@chilco/types';

import { getRegisterToken } from './helper';
import { SET_REGISTER_TOKEN, VALIDATE_TOKEN } from './constants/actionTypes';

export async function authorizeTokenAction(ws: WebsocketType, token: string) {
  ws.emit(VALIDATE_TOKEN, { token });
}
export async function setTokenRegister(ws: WebsocketType, token: string) {
  ws.emit(SET_REGISTER_TOKEN, { token });
}

export function refreshToken(ws: WebsocketType, oldToken) {
  const token = getRegisterToken();
  ws.leave(oldToken);
  ws.join(token);

  setTokenRegister(ws, token);
}
