import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledContainer: any = styled.div`
  margin: 2px;
  width: 45px;
  height: 45px;
  display: flex;
  cursor: pointer;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background-color: ${({ isActive }: any) =>
    isActive ? 'rgba(255, 255, 255, 0.5)' : 'transparent'};
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

interface PropsType {
  isActive?: boolean;
  children: ReactNode;
  onClick?: () => any;
}
export function MainMenuItem({
  isActive,
  children,
  onClick = () => {}
}: PropsType) {
  return (
    <StyledContainer onClick={onClick} isActive={isActive}>
      {children}
    </StyledContainer>
  );
}
export default MainMenuItem;
