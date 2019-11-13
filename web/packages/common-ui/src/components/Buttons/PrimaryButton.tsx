import styled from 'styled-components';

export const PrimaryButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
  padding: 8px 12px;
  border-radius: 4px;
  box-shadow: 0px 4px 24px -6px rgba(22, 72, 129, 0.2);
  border: 2px solid ${({ theme }) => theme.colors.primary};

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};

  &:hover {
    box-shadow: 0px 4px 24px -6px rgba(22, 72, 129, 0.4);
  }

  &:active {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.white};
  }
`;
