import { refreshToken } from './actions';
import { WebsocketType } from '@chilco/types';

import { GET_REGISTER_TOKEN } from './constants/actionTypes';

export function websocket(ws: WebsocketType) {
  console.log('New Device');

  ws.on(GET_REGISTER_TOKEN, (data = {}) => refreshToken(ws, data.token));
}
