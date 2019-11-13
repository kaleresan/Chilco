import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { Headline } from '../..';

const StyledContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  overflow: hidden;
  padding: 2px 8px;
  box-sizing: border-box;
`;
const StyledContent: any = styled.button`
  flex: 1;
  border: none;
  outline: none;
  display: flex;
  cursor: pointer;
  padding: 0px 8px;
  border-radius: 5px;
  align-items: center;
  background-color: ${({ isActive }: any) =>
    isActive ? 'rgba(255, 255, 255, 0.5)' : 'transparent'};

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;
const StyledTitle = styled(Headline)`
  flex: 1;
  font-size: 22px;
  font-weight: 400;
  text-align: start;
  margin: 0 0 0 16px;
  color: ${({ theme: { colors } }) => colors.white};
`;
const IconContainer = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;

interface PropsType {
  title: string;
  icon?: ReactNode;
  isActive?: boolean;
  onClick?: () => any;
}
export function SubMenuItem({
  icon,
  title,
  isActive,
  onClick = () => {}
}: PropsType) {
  return (
    <StyledContainer onClick={onClick}>
      <StyledContent isActive={isActive}>
        <IconContainer>{icon}</IconContainer>
        <StyledTitle>{title}</StyledTitle>
      </StyledContent>
    </StyledContainer>
  );
}
export default SubMenuItem;
