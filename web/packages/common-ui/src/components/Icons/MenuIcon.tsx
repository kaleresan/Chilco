import React from 'react';

import { colors } from '../../styles/colors';

interface PropsType {
  color?: string;
  bgColor?: string;
}

export function MenuIcon({
  bgColor = 'none',
  color = colors.tertiary40,
  ...props
}: PropsType) {
  return (
    <svg width="15" height="13" fill={bgColor} viewBox="0 0 15 13" {...props}>
      <rect width="15" height="3" rx="1.5" fill={color} />
      <rect y="5" width="15" height="3" rx="1.5" fill={color} />
      <rect y="10" width="15" height="3" rx="1.5" fill={color} />
    </svg>
  );
}
export default MenuIcon;
