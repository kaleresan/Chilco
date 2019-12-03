import { push } from 'connected-react-router';
import { fetchStart } from '@chilco/middlewares';

export type APPROVE_DEVICE_TYPE = 'APPROVE_DEVICE';
export const APPROVE_DEVICE: APPROVE_DEVICE_TYPE = 'APPROVE_DEVICE';
export function approveDevice(token: string) {
  return dispatch => {
    dispatch(
      fetchStart(APPROVE_DEVICE, {
        method: 'POST',
        route: '/desktop-sync/register/' + token,
        callback: data => {
          if (data) {
            dispatch(push('/'));
            return;
          }
        }
      })
    );
  };
}
