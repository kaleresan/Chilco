import React from 'react';
import styled from 'styled-components';

import { Text } from '../..';

const StyledImage = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
  border-radius: 15px;
`;
const StyledProfilePicture: any = styled(Text)`
  width: 30px;
  height: 30px;
  display: flex;
  cursor: pointer;
  font-size: 12px;
  text-align: center;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  color: ${({ theme: { colors } }) => colors.white}
  background-color: ${({ color, theme: { colors } }) =>
    color || colors.primary};
`;

interface PropsType {
  color?: string;
  imageURL?: string;
  lastName?: string;
  firstName?: string;
}
export function ProfilePicture({
  color,
  imageURL,
  lastName,
  firstName,
  ...props
}: PropsType) {
  if (imageURL) {
    return <StyledImage src={imageURL} {...props} />;
  }

  return (
    <StyledProfilePicture color={color} {...props}>
      {(firstName || '').charAt(0)}
      {(lastName || '').charAt(0)}
    </StyledProfilePicture>
  );
}
export default ProfilePicture;
