import { isLocal } from '@chilco/generic';

export const API_URI = isLocal()
  ? 'https://localhost:5000'
  : 'https://app.chilco.com/api';
export const SOCKET_URI = 'https://socket.chilco.com/';
// ${window.location.host}
