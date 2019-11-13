import React from 'react';

import { colors } from '../../styles/colors';

interface PropsType {
  color?: string;
  bgColor?: string;
  className?: string;
  onClick?: () => void;
}

export function ShortMenuIcon({
  bgColor = 'none',
  color = colors.tertiary20,
  ...props
}: PropsType) {
  return (
    <svg width="16" height="56" fill={bgColor} viewBox="0 0 16 56" {...props}>
      <circle cx="8" cy="8" r="8" fill={color} />
      <circle cx="8" cy="48" r="8" fill={color} />
      <circle cx="8" cy="28" r="8" fill={color} />
    </svg>
  );
}
export default ShortMenuIcon;
