import { socketSaga } from './socketSaga';
import { deviceSaga } from './deviceSaga';

export function runSagas(sagaMiddleware) {
  sagaMiddleware.run(socketSaga);
  sagaMiddleware.run(deviceSaga);
}
