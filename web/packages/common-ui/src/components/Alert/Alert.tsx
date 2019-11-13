import React from 'react';
import styled from 'styled-components';
import { Headline, Text, Modal, PrimaryButton, SecondaryButton } from '../..';

const StyledModal = styled(Modal)`
  min-height: 30vh;
  max-height: 80vh;
`;
const StyledFooter = styled.div`
  display: flex;
  margin: 8px 0 0;
`;
const StyledContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const StyledPlaceholder = styled.div`
  flex: 1;
`;
const StyledHeadline = styled(Headline)`
  font-size: 22px;
  margin: 0 0 8px 0;
`;
const StyledDescription = styled(Text)`
  flex: 1;
  font-size: 18px;
  overflow: hidden;
  font-weight: 400;
  color: ${({ theme: { colors } }) => colors.tertiary50};
`;

interface PropsType {
  headline?: string;
  submitText?: string;
  cancelText?: string;
  onError?: () => void;
  onClose?: () => void;
  onSubmit?: () => void;
  description?: string;
}
export function Alert({
  headline,
  description,
  submitText = '',
  cancelText = '',
  onError = () => {},
  onClose = () => {},
  onSubmit = () => {}
}: PropsType) {
  return (
    <StyledModal onClose={onClose}>
      <StyledContent>
        <StyledHeadline>{headline}</StyledHeadline>
        <StyledDescription>{description}</StyledDescription>
      </StyledContent>
      <StyledFooter>
        <SecondaryButton
          onClick={() => {
            onClose();
            onError();
          }}
        >
          {cancelText}
        </SecondaryButton>
        <StyledPlaceholder />
        <PrimaryButton
          onClick={() => {
            onClose();
            onSubmit();
          }}
        >
          {submitText}
        </PrimaryButton>
      </StyledFooter>
    </StyledModal>
  );
}
