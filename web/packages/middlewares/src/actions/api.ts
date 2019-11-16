export type START_FETCH_ACTION_TYPE = 'START_FETCH';
export const START_FETCH_ACTION: START_FETCH_ACTION_TYPE = 'START_FETCH';
// On fetch are success
export type SUCCESS_FETCH_ACTION_TYPE = 'SUCCESS_FETCH';
export const SUCCESS_FETCH_ACTION: SUCCESS_FETCH_ACTION_TYPE = 'SUCCESS_FETCH';
// On fetch throws a error
export type ERROR_FETCH_ACTION_TYPE = 'ERROR_FETCH';
export const ERROR_FETCH_ACTION: ERROR_FETCH_ACTION_TYPE = 'ERROR_FETCH';

export const fetchStart = (
  fetchAction: any,
  payload: {
    body?: any;
    route: string;
    timeout?: number;
    params?: { [key: string]: any };
    headers?: { [key: string]: string };
    callback?: (data: any, error: any) => void;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  }
): any => ({
  type: START_FETCH_ACTION,
  payload: {
    type: fetchAction,
    ...payload
  }
});
export const fetchSuccess = (
  fetchAction: any,
  data: any = {},
  options: any = {}
): any => ({
  type: SUCCESS_FETCH_ACTION,
  payload: {
    data,
    options,
    type: fetchAction
  }
});
export const fetchError = (
  fetchAction: any,
  error: any,
  options: any = {}
): any => ({
  type: ERROR_FETCH_ACTION,
  payload: {
    ...options,
    error,
    type: fetchAction
  }
});
