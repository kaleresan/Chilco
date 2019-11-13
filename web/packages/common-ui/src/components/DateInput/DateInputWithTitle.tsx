import React, { forwardRef } from 'react';
import styled from 'styled-components';

import { Paragraph } from '../Text/Text';
import { DateInput, DateInputPropsType } from './DateInput';

const StyledTitle = styled(Paragraph)`
  user-select: none;
  margin: 4px 0 4px 17px;
`;
const StyledContainer = styled.div``;

interface PropsType extends DateInputPropsType {
  title: string;
}

export const DateInputWithTitle = forwardRef(
  ({ title, className, ...props }: PropsType, ref) => (
    <StyledContainer className={className}>
      <StyledTitle>{title}</StyledTitle>
      <DateInput ref={ref} {...props} />
    </StyledContainer>
  )
);
