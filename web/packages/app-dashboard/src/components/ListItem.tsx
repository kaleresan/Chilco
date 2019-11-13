import styled from 'styled-components';

import { Headline } from '@chilco/common-ui';

export const Item: any = styled(Headline)`
  display: flex;
  padding: 0 4px;
  font-size: 20px;
  overflow: hidden;
  flex-direction: column;
  flex: ${({ flex }: any) => flex || 3};
  text-align: ${({ center }: any) => (center ? 'center' : 'left')};
  align-items: ${({ center }: any) => (center ? 'center' : 'flex-start')};
`;
export default Item;
