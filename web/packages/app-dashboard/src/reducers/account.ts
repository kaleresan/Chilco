import { Action } from '../actions';
import {
  SOCKET_SET_TOKEN_ACTION,
  SOCKET_VALIDATE_TOKEN_ACTION
} from '../actions/socket';
import { ERROR_FETCH_ACTION, SUCCESS_FETCH_ACTION } from '@chilco/middlewares';
import {
  GET_CURRENT_USER_ACTION,
  LOGIN_ACTION,
  LOGOUT_ACTION
} from '../actions/api';

export interface AccountType {
  id?: string;
  lastname?: string;
  firstname?: string;
  token: string | null;
  profilePicture?: string;
  authorizationToken: string | null;
}
export const initialState: AccountType = {
  token: null,
  authorizationToken: null
};
export function accountReducer(state = initialState, action: Action = {}) {
  switch (action.type) {
    case SUCCESS_FETCH_ACTION:
      switch (action.payload.type) {
        case GET_CURRENT_USER_ACTION:
          return {
            ...state,
            ...action.payload.data
          };
        case LOGIN_ACTION:
          return {
            ...state,
            token: action.payload.data.token
          };
        default:
          return state;
      }
    case SOCKET_VALIDATE_TOKEN_ACTION:
      return {
        ...state,
        authorizationToken: null,
        token: action.payload.token
      };
    case SOCKET_SET_TOKEN_ACTION:
      return { ...state, authorizationToken: action.payload.token };
    case ERROR_FETCH_ACTION:
      switch (action.payload.type) {
        case GET_CURRENT_USER_ACTION:
          return initialState;
        default:
          return state;
      }
    case LOGOUT_ACTION: {
      return initialState;
    }
    default:
      return state;
  }
}
export default accountReducer;
