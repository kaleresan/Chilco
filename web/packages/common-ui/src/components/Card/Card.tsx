import styled from 'styled-components';

export const Card = styled.div`
  flex: 1;

  border: 1px solid ${({ theme }) => theme.colors.tertiary10};
  border-top: 5px solid ${({ theme }) => theme.colors.primary};

  border-radius: 8px;
  overflow-y: scroll;
  overflow-x: hidden;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 24px -6px rgba(22, 72, 129, 0.2);
`;
export default Card;
