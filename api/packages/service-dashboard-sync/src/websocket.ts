import { refreshToken } from './actions';
import { WebsocketType } from '@chilco/types';

import { REFRESH_TOKEN } from './constants/actionTypes';

export function websocket(ws: WebsocketType) {
  ws.on(REFRESH_TOKEN, (data = {}) => refreshToken(ws, data.token));
}
