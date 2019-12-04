import React from 'react';
import { Route, Router, Switch } from 'react-router';
import { asyncComponent } from '@chilco/common-ui';

import { history } from './store';

export const HOME_PATH = '/';
export const SIGN_UP_PATH = '/signUp';
export const SIGN_IN_PATH = '/signIn';
export const DASHBOARD_PATH = '/dashboard';
export const APPROVE_DEVICE_PATH = '/approve/device/:token';

const AsyncSignUpComponent: any = asyncComponent(() => {
  return import('../routes/SignUp/SignUp');
});
const ApproveDeviceComponent: any = asyncComponent(() => {
  return import('../routes/ApproveDevice/ApproveDevice');
});
const AsyncSignInComponent: any = asyncComponent(() => {
  return import('../routes/SignIn/SignIn');
});
const AsyncHomeComponent: any = asyncComponent(() => {
  return import('../routes/Home/Home');
});
const AsyncDashboardComponent: any = asyncComponent(() => {
  return import('../routes/Dashboard/Dashboard');
});

export function AppRouter() {
  return (
    <Router history={history}>
      <Switch>
        <Route path={SIGN_UP_PATH} component={AsyncSignUpComponent} />
        <Route path={SIGN_IN_PATH} component={AsyncSignInComponent} />
        <Route path={APPROVE_DEVICE_PATH} component={ApproveDeviceComponent} />
        <Route path={DASHBOARD_PATH} component={AsyncDashboardComponent} />
        <Route exact path={HOME_PATH} component={AsyncHomeComponent} />
      </Switch>
    </Router>
  );
}
/*
 */
