import {
  all,
  put,
  fork,
  take,
  delay,
  cancel,
  takeEvery
} from 'redux-saga/effects';
import { push } from 'connected-react-router';

import {
  emitSocketAction,
  SOCKET_VALIDATE_TOKEN_ACTION
} from '../actions/socket';
import { REFRESH_TOKEN } from '../constants/socket';
import {
  DEVICE_SETUP_ACTION,
  START_DEVICE_AUTHENTICATION
} from '../actions/device';
import { getCurrentUser } from '../actions/api';

function* refreshTokenSaga() {
  try {
    while (true) {
      yield put(emitSocketAction(REFRESH_TOKEN, {}));
      yield delay(40000);
    }
  } finally {
  }
}

function* handleDeviceAuthenticationSaga(action) {
  const refreshTokenTask = yield fork(refreshTokenSaga);
  yield take(SOCKET_VALIDATE_TOKEN_ACTION);
  yield cancel(refreshTokenTask);
  yield put(push('/'));
}

function* setupApp() {
  // @ts-ignore
  yield put(getCurrentUser());

}

export function* deviceSaga() {
  yield all([
    takeEvery(DEVICE_SETUP_ACTION, setupApp),
    takeEvery(START_DEVICE_AUTHENTICATION, handleDeviceAuthenticationSaga)
  ]);
}
