import { isLocal } from '@chilco/generic';

export const API_URI = isLocal()
  ? 'http://app.chilco.de/'
  : 'http://app.chilco.de/';
export const SOCKET_URI = 'https://socket.chilco.com/';
// ${window.location.host}
