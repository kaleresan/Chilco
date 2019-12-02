import { push } from 'connected-react-router';
import { fetchStart } from '@chilco/middlewares';
import { HOME_PATH, SIGN_IN_PATH } from '../../App/AppRouter';

export type REGISTER_ACTION_TYPE = 'REGISTER';
export const REGISTER_ACTION: REGISTER_ACTION_TYPE = 'REGISTER';
export function register({
  email,
  lastname,
  password,
  firstname
}: {
  email: string;
  password: string;
  lastname: string;
  firstname: string;
}) {
  return dispatch => {
    dispatch(
      fetchStart(REGISTER_ACTION, {
        method: 'POST',
        route: '/auth/register',
        body: { email, password, lastname, firstname },
        callback: data => {
          if (data) {
            dispatch(login({ email, password }));
            return;
          }
        }
      })
    );
  };
}

export type LOGIN_ACTION_TYPE = 'LOGIN';
export const LOGIN_ACTION: LOGIN_ACTION_TYPE = 'LOGIN';
export function login({
  email,
  password
}: {
  email: string;
  password: string;
}) {
  return dispatch => {
    dispatch(
      fetchStart(LOGIN_ACTION, {
        method: 'POST',
        route: '/auth/login',
        body: { email, password },
        callback: data => {
          if (data && window.location.pathname.match(HOME_PATH)) {
            dispatch(push(HOME_PATH));
            return;
          }

          if (!data) {
            dispatch(push(SIGN_IN_PATH));
            return;
          }
        }
      })
    );
  };
}

export type LOGOUT_ACTION_TYPE = 'LOGOUT';
export const LOGOUT_ACTION: LOGOUT_ACTION_TYPE = 'LOGOUT';
export function logout() {
  return dispatch => {
    dispatch(push(SIGN_IN_PATH));
    dispatch({ type: LOGOUT_ACTION });
  };
}
