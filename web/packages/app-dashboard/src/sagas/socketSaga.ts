import { all, takeEvery } from 'redux-saga/effects';
import { EMIT_SOCKET_ACTION } from '../actions/socket';

import socket from '../socket';

// eslint-disable-next-line require-yield
function* emitSocketSaga(action) {
  const socketAction = action.payload;
  socket.emit(socketAction.type, socketAction.payload);
}
export function* socketSaga() {
  yield all([takeEvery(EMIT_SOCKET_ACTION, emitSocketSaga)]);
}
