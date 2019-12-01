import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { IntlShape, injectIntl } from 'react-intl';

const StyledContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  overflow: hidden;
  background-color: ${({ theme: { colors } }) => colors.white};
`;
const StyledContent = styled.div`
  flex: 1;
  display: flex;
  overflow-x: hidden;
  overflow-y: scroll;
  flex-direction: column;
`;

interface PropsType {
  children: any;
  intl: IntlShape;
}
export function PageContainer({ intl, children }: PropsType) {
  return (
    <StyledContainer>
      <StyledContent>{children}</StyledContent>
    </StyledContainer>
  );
}
export default injectIntl(
  connect(
    null,
    (dispatch: any) => ({
      open: (path: string) => dispatch(push(path))
    })
  )(PageContainer)
);
