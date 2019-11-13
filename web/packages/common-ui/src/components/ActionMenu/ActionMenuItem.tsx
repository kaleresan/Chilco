import React from 'react';
import styled from 'styled-components';

import { Paragraph } from '../..';

const StyledContainer = styled(Paragraph)`
  margin: 0px;
  height: 24px;
  display: flex;
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  padding: 8px 16px;
  line-height: 16px;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme: { colors } }) => colors.white};

  &:hover {
    background-color: rgb(246, 246, 246);
  }
`;

interface PropsType {
  children?: any;
  onClick?: () => void;
}
export function ActionMenuItem({
  children,
  onClick = () => {},
  ...props
}: PropsType) {
  return (
    <StyledContainer onClick={onClick} {...props}>
      {children}
    </StyledContainer>
  );
}
export default ActionMenuItem;
