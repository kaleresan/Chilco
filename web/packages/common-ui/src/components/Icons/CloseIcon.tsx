import React from 'react';

import { colors } from '../../styles/colors';

interface PropsType {
  color?: string;
  bgColor?: string;
}

export function CloseIcon({
  bgColor = 'none',
  color = colors.white,
  ...props
}: PropsType) {
  return (
    <svg width="43" height="48" fill={bgColor} viewBox="0 0 43 48">
      <path
        stroke={color}
        stroke-width="5"
        d="M2.37256 2.1377L40.8855 46.0085"
      />
      <path
        stroke={color}
        stroke-width="5"
        d="M2.37256 46.0085L40.8855 2.13776"
      />
    </svg>
  );
}
export default CloseIcon;
