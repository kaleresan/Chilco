import { isLocal } from '@chilco/generic';

export const API_URI = isLocal()
  ? 'http://chilco.de/api'
  : 'http://chilco.de/api';
export const SOCKET_URI = 'https://socket.chilco.com/';
// ${window.location.host}
