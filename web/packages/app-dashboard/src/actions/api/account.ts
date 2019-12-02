import { push } from 'connected-react-router';
import { fetchStart } from '@chilco/middlewares';
import { HOME_PATH, SIGN_IN_PATH, SIGN_UP_PATH } from '../../App/AppRouter';

export type GET_CURRENT_USER_ACTION_TYPE = 'GET_CURRENT_USER_ACTION';
export const GET_CURRENT_USER_ACTION: GET_CURRENT_USER_ACTION_TYPE =
  'GET_CURRENT_USER_ACTION';

export function getCurrentUser() {
  return dispatch => {
    dispatch(
      fetchStart(GET_CURRENT_USER_ACTION, {
        route: '/account',
        callback: data => {
          if (
            data &&
            (window.location.href.includes(SIGN_IN_PATH) ||
              window.location.href.includes(SIGN_UP_PATH))
          ) {
            dispatch(push(HOME_PATH));
            return;
          }

          if (!data && !window.location.href.includes(SIGN_IN_PATH)) {
            dispatch(push(SIGN_IN_PATH));
            return;
          }
        }
      })
    );
  };
}
