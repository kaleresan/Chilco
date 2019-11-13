import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { Card, CrossIcon } from '../..';

const StyledContainer = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 500;
  display: flex;
  position: fixed;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(31, 48, 94, 0.7);
`;

export const StyledContent: any = styled(Card)`
  width: 70%;
  flex: unset;
  display: flex;
  padding: 8px 16px;
  margin-top: -30px;
  box-sizing: border-box;
  flex-direction: column;
  height: ${({ height }: any) => height || '50vh'};
  background-color: ${({ theme: { colors } }) => colors.white};
`;
export const StyledHeader = styled.div`
  width: 70%;
  height: 30px;
  display: flex;
  position: relative;
  justify-content: flex-end;
`;
const StyledCrossIcon = styled(CrossIcon)`
  top: -38px;
  right: -38px;

  width: 30px;
  height: 30px;

  cursor: pointer;
  position: absolute;
`;

interface PropsType {
  className?: string;
  onClose?: () => void;
  height?: number | string;
  children: ReactNode | string;
}
export function Modal({
  height,
  children,
  className,
  onClose = () => {}
}: PropsType) {
  return (
    <StyledContainer>
      <StyledHeader>
        <StyledCrossIcon onClick={onClose} />
      </StyledHeader>
      <StyledContent className={className} height={height}>
        {children}
      </StyledContent>
    </StyledContainer>
  );
}
