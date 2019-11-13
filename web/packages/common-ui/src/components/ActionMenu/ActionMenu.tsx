import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { ShortMenuIcon } from '../..';

const StyledContainer = styled.div`
  position: relative;
`;
const StyledShortMenuIcon = styled(ShortMenuIcon)`
  width: 22px;
  height: 22px;
  cursor: pointer;
`;
const StyledContent: any = styled.div`
  top: 0px;
  width: auto;
  height: auto;
  z-index: 100;
  cursor: pointer;
  min-width: 100px;
  position: absolute;
  background-color: ${({ theme: { colors } }) => colors.white};
  ${({ isRight }: any) => (isRight ? 'right: 0px' : 'left: 0px')};
  padding: ${({ isActive }: any) => (isActive ? '4px 0px' : '0px')};
  box-shadow: ${({ isActive }: any) =>
    isActive
      ? '0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.1), 0 3px 14px 2px rgba(0, 0, 0, 0.12)'
      : 'none'};
`;

interface PropsType {
  isRight?: boolean;
  children?: (close: () => void) => any;
}
export function ActionMenu({ children, isRight = false }: PropsType) {
  const containerRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  function handleClickOutside(event) {
    if (
      isActive &&
      containerRef &&
      containerRef.current &&
      // @ts-ignore
      !containerRef.current.contains(event.target)
    ) {
      setIsActive(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <StyledContainer ref={containerRef}>
      <StyledShortMenuIcon onClick={() => setIsActive(true)} />
      <StyledContent isRight={isRight} isActive={isActive}>
        {isActive && children && children(() => setIsActive(false))}
      </StyledContent>
    </StyledContainer>
  );
}
