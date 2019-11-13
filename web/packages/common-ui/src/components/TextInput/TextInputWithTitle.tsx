import React, { forwardRef } from 'react';
import styled from 'styled-components';

import { Paragraph } from '../Text/Text';
import { TextInput, TextInputPropsType } from './TextInput';

const StyledTitle = styled(Paragraph)`
  user-select: none;
  margin: 4px 0 4px 17px;
`;
const StyledContainer = styled.div``;

interface PropsType extends TextInputPropsType {
  title: string;
}

export const TextInputWithTitle = forwardRef(
  ({ title, className, ...props }: PropsType, ref) => (
    <StyledContainer className={className}>
      <StyledTitle>{title}</StyledTitle>
      <TextInput ref={ref} {...props} />
    </StyledContainer>
  )
);
