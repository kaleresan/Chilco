import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import storage from 'redux-persist/lib/storage';
import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { getFetchMiddleware } from '@chilco/middlewares';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';

import { API_URI } from '../constants/api';

import { runSagas } from '../sagas';
// import { initSocket } from '../socket';
import { createRootReducer } from '../reducers';

export const history = createBrowserHistory();

const persistConfig = {
  storage,
  key: 'root',
  whitelist: ['account']
};

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    persistReducer(persistConfig, createRootReducer(history)),
    {},
    composeWithDevTools(
      applyMiddleware(
        thunk,
        routerMiddleware(history),
        getFetchMiddleware({ api: API_URI }),
        sagaMiddleware
      )
    )
  );
  const persistor = persistStore(store);
  runSagas(sagaMiddleware);
  // initSocket(store.dispatch);

  return { store, persistor };
}
