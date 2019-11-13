import styled from 'styled-components';

export const SecondaryButton = styled.button`
  height: 40px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
  padding: 8px 12px;
  border-radius: 8px;
  box-sizing: border-box;
  box-shadow: 0px 4px 24px -6px rgba(22, 72, 129, 0.2);
  border: 2px solid ${({ theme }) => theme.colors.white};

  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.white};

  &:hover {
    box-shadow: 0px 4px 24px -6px rgba(22, 72, 129, 0.4);
  }

  &:active {
    color: ${({ theme }) => theme.colors.tertiary20};
    box-shadow: 0px 4px 24px -6px rgba(22, 72, 129, 0.4);
  }
`;
