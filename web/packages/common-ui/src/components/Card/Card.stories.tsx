import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import { Card } from './Card';

const StyledContainer = styled.div`
  width: 500px;
  height: 300px;
  display: flex;
`;

storiesOf('Cards', module).add('Default', () => (
  <StyledContainer>
    <Card />
  </StyledContainer>
));
