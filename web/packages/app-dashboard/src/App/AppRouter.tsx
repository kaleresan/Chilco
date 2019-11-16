import React from 'react';
import { Route, Router, Switch } from 'react-router';
import { asyncComponent } from '@chilco/common-ui';

import { history } from './store';

export const HOME_PATH = '/';
export const FAIRS_PATH = '/fairs';
export const EDIT_CONTACT_PATH = '/contacts/:id';
export const DEVICE_AUTHORIZATION_PATH = '/auth';

const AsyncAuthentication: any = asyncComponent(() => {
  return import('../routes/Authentication/Authentication');
});
const AsyncHome: any = asyncComponent(() => {
  return import('../routes/Home/Home');
});

export function AppRouter() {
  return (
    <Router history={history}>
      <Switch>
        <Route
          path={DEVICE_AUTHORIZATION_PATH}
          component={AsyncAuthentication}
        />
        <Route path={HOME_PATH} component={AsyncHome} />
      </Switch>
    </Router>
  );
}
