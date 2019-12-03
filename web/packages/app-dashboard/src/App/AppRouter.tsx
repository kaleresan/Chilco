import React from 'react';
import { Route, Router, Switch } from 'react-router';
import { asyncComponent } from '@chilco/common-ui';

import { history } from './store';

export const HOME_PATH = '/';
export const SIGN_UP_PATH = '/signUp';
export const SIGN_IN_PATH = '/signIn';
export const DOWNLOAD_PATH = '/download';

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
const AsyncDownloadComponent: any = asyncComponent(() => {
  return import('../routes/Download/Download');
});

export function AppRouter() {
  return (
    <Router history={history}>
      <Switch>
        <Route path={SIGN_UP_PATH} component={AsyncSignUpComponent} />
        <Route path={SIGN_IN_PATH} component={AsyncSignInComponent} />
        <Route path={APPROVE_DEVICE_PATH} component={ApproveDeviceComponent} />
        <Route exact path={HOME_PATH} component={AsyncHomeComponent} />
      </Switch>
    </Router>
  );
}
/*
 */
