import { WebsocketType } from '@chilco/types';

import { getRefreshToken } from './helper';
import { SET_TOKEN, VALIDATE_TOKEN } from './constants/actionTypes';

export async function authorizeTokenAction(ws: WebsocketType, token: string) {
  ws.emit(VALIDATE_TOKEN, { token });
}
export async function setToken(ws: WebsocketType, token: string) {
  ws.emit(SET_TOKEN, { token });
}

export function refreshToken(ws: WebsocketType, oldToken) {
  const token = getRefreshToken();
  ws.leave(oldToken);
  ws.join(token);
  setToken(ws, token);
}
