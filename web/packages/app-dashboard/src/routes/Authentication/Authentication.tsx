import React, { useContext, useEffect } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { startDeviceAuthentication } from '../../actions/device';

import { connect } from 'react-redux';
import { StateType } from '../../reducers';

const StyledContainer = styled.div`
  flex: 1;
`;
const StyledSectionWrapper: any = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
  padding: 24px 16px;
  align-items: center;
  box-sizing: border-box;
  flex-direction: column;
  background-color: ${({ color = null, theme: { colors } }: any) =>
    color || colors.white};
`;
const StyledContent = styled.div`
  display: flex;
`;

interface PropsType {
  isLoaded: boolean;
  token: string | null;
  getToken: () => void;
}
export function AuthenticationRoute({ token, getToken }: PropsType) {
  const theme = useContext(ThemeContext);
  useEffect(() => {
    getToken();
  }, [getToken]);

  return (
    <StyledContainer>
      <StyledContent>
        <StyledSectionWrapper color={theme.colors.primary}>
        </StyledSectionWrapper>
        <StyledSectionWrapper>
        </StyledSectionWrapper>
      </StyledContent>
    </StyledContainer>
  );
}
export default connect(
  ({ account, _persist }: StateType) => ({
    token: account.authorizationToken
  }),
  dispatch => ({
    getToken: () => dispatch(startDeviceAuthentication())
  })
)(AuthenticationRoute);
