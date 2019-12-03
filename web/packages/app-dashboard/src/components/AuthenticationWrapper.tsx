import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setupDevice } from '../actions/device';
import { StateType } from '../reducers';
import { AccountType } from '../reducers/account';

interface PropsType {
  router: any;
  children: any;
  account: AccountType;
  setupDevice: () => void;
}
function AuthenticationWrapperComponent({
  children,
  router,
  setupDevice,
  account
}: PropsType) {
  useEffect(() => {
    if (window.location.href.includes('/signUp')) return;

    setupDevice();
  }, [setupDevice, account, router]);

  return children;
}
export const AuthenticationWrapper = connect(
  ({ router, account }: StateType) => ({
    router,
    account
  }),
  dispatch => ({
    setupDevice: () => dispatch(setupDevice())
  })
)(AuthenticationWrapperComponent);
export default AuthenticationWrapper;
