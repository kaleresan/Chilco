import React from 'react';

import { colors } from '../../styles/colors';

interface PropsType {
  color?: string;
  bgColor?: string;
}

export function ArrowIcon({
  bgColor = 'none',
  color = colors.white,
  ...props
}: PropsType) {
  return (
    <svg width="11" height="18" viewBox="0 0 11 18" fill={bgColor} {...props}>
      <path
        stroke={color}
        stroke-width="2"
        d="M9.37879 1L1.79298 7.92308C1.36442 8.31419 1.35758 8.98671 1.77807 9.38647L9.37879 16.6123"
      />
    </svg>
  );
}
export default ArrowIcon;
