import React from 'react';

import { colors } from '../../styles/colors';

interface PropsType {
  color?: string;
  bgColor?: string;
}

export function ContactIcon({
  bgColor = 'none',
  color = colors.white,
  ...props
}: PropsType) {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill={bgColor} {...props}>
      <path
        stroke={color}
        stroke-width="1.56"
        d="M8.63866 14.5597C8.63866 14.5597 6.63439 12.2547 6.40196 11.0091C5.27814 4.98655 7.08507 1 12.3058 1C16.6982 1 18.5163 4.1012 17.8448 9.03811C17.5793 10.9894 15.5264 15.0635 15.5264 15.0635C15.5264 15.0635 15.6466 20.2329 23.0046 20.2329C24.3743 20.2329 23.9313 24.1474 23.9313 24.1474H1.16158C1.16158 24.1474 0.560272 20.2329 2.19672 20.2329C3.85543 20.2329 8.63866 17.3935 8.63866 17.3935"
      />
    </svg>
  );
}
export default ContactIcon;
