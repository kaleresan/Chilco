import styled from 'styled-components';

import { Headline } from '../..';

export const SubMenuTitle = styled(Headline)`
  display: flex;
  font-size: 32px;
  font-weight: 400;
  text-align: center;
  padding: 24px 8px 8px;
  align-items: center;
  justify-content: center;
  color: ${({ theme: { colors } }) => colors.white};
`;
