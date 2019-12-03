import { combineReducers } from 'redux';

import { History } from 'history';
import { PersistState } from 'redux-persist';
import { connectRouter } from 'connected-react-router';

import alert, { AlertType } from './alert';
import modal, { ModalType } from './modal';
import account, { AccountType } from './account';

export interface StateType {
  router: any;
  modal: ModalType;
  alert: AlertType;
  account: AccountType;
  _persist: PersistState;
}

export function createRootReducer(history: History<any>) {
  return combineReducers({
    alert,
    modal,
    account,
    router: connectRouter(history)
  });
}
export default createRootReducer;
