import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setupDevice } from '../actions/device';

interface PropsType {
  children: any;
  setupDevice: () => void;
}
function AuthenticationWrapperComponent({ children, setupDevice }: PropsType) {
  useEffect(() => {
    if (window.location.href.includes('/signUp')) return;

    setupDevice();
  }, [setupDevice]);

  return children;
}
export const AuthenticationWrapper = connect(
  null,
  dispatch => ({
    setupDevice: () => dispatch(setupDevice())
  })
)(AuthenticationWrapperComponent);
export default AuthenticationWrapper;
