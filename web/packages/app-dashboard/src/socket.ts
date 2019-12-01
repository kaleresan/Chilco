import io from 'socket.io-client';
import { SOCKET_URI } from './constants/api';

//import { setToken, validateToken } from './actions/socket';
//import { SET_TOKEN, VALIDATE_TOKEN } from './constants/socket';

export const socket = io(SOCKET_URI, {
  path: '/dashboard/socket.io',
  transports: ['websocket']
});

//export function initSocket(dispatch: any) {
//  socket.on(SET_TOKEN, ({ token }) => dispatch(setToken(token)));
//  socket.on(VALIDATE_TOKEN, ({ token }) => dispatch(validateToken(token)));
//}

/*
export const subscribeToAuthentication = ref => {
  socket.on(SET_TOKEN, ({ token }) => {
    ref.setState({ token });
  });
  socket.on(VALIDATE_TOKEN, data => {
    delete ref.socket;
    ref.props.saveToken(data.token);
    ref.props.getCurrentUser();
    ref.props.openDashboard();
  });

  socket.emit(REFRESH_TOKEN);
  ref.socket = setInterval(
    () => socket.emit(REFRESH_TOKEN, { token: ref.state.token }),
    40000
  );
};
*/
export default socket;
