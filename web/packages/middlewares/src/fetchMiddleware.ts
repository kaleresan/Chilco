import { fetchError, fetchSuccess, START_FETCH_ACTION } from './actions/api';

export const ACCEPT_HEADER = 'Accept';
export const CONTENT_TYPE_HEADER = 'Content-Type';
export const X_ACCESS_TOKEN_HEADER = 'x-access-token';
export const APPLICATION_JSON_CONTENT_TYPE = 'application/json';

export function getFetchMiddleware({
  api,
  timeout = 5000,
  authToken = 'state.account.token'
}: {
  api: string;
  timeout?: number;
  authToken?: string;
}) {
  return ({
    getState,
    dispatch
  }: {
    getState: () => any;
    dispatch: (action: any) => void;
  }) => (next: (action: any) => void) => async (action: any) => {
    const state: any = getState();

    next(action);
    if (action.type !== START_FETCH_ACTION) return;

    const type = action.payload.type;
    const payload = action.payload || {};
    const body = payload.body;

    const options = {
      ...payload,
      timeout,
      method: payload.method || 'GET',
      ...(body
        ? { body: payload.form ? body : (body && JSON.stringify(body)) || '' }
        : {}),
      headers: {
        [ACCEPT_HEADER]: APPLICATION_JSON_CONTENT_TYPE,
        [CONTENT_TYPE_HEADER]: APPLICATION_JSON_CONTENT_TYPE,
        [X_ACCESS_TOKEN_HEADER]: (state.account && state.account.token) || '',
        ...(payload.headers || {})
      }
    };
    const uri = `${api}${options.route}`;

    const callback = options.callback ? options.callback : () => {};

    try {
      const response = await fetch(uri, options);

      if (response.status !== 200) {
        const text = await response.text();
        callback(null, text);
        dispatch(fetchError(type, text, options));
        return;
      }

      const { data, success, error } = await response.json();

      if (!success) {
        try {
          callback(null, error);
        } catch {}
        dispatch(fetchError(type, error, options));
        return;
      }

      dispatch(fetchSuccess(type, data, { ...options, body }));
      try {
        callback(data);
      } catch {}
    } catch (err) {
      dispatch(fetchError(type, err, { ...options, body }));
      try {
        callback(null, err);
      } catch {}
    }
  };
}
