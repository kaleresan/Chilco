import React from 'react';

import { colors } from '../../styles/colors';

interface PropsType {
  color?: string;
  bgColor?: string;
}

export function EmailIcon({
  bgColor = 'none',
  color = colors.white,
  ...props
}: PropsType) {
  return (
    <svg width="114px" height="68px" viewBox="0 0 114 68" {...props}>
      <g stroke={bgColor} stroke-width="1" fill="none" fill-rule="evenodd">
        <g stroke={color}>
          <rect
            x="3"
            y="3"
            rx="7"
            width="108"
            height="62"
            stroke-width="6"
          ></rect>
          <polyline
            stroke-width="4"
            points="4.54417311 3.95065662 57 39.6383608 110.859987 3.95065662"
          ></polyline>
          <path
            stroke-width="3"
            d="M24.2902409,64.6567289 L33.1820968,41.285537"
          ></path>
          <path
            stroke-width="3"
            d="M81,64.3711919 L89.8918559,41"
            transform="translate(85.445928, 52.685596) scale(-1, 1) translate(-85.445928, -52.685596) "
          ></path>
        </g>
      </g>
    </svg>
  );
}
export default EmailIcon;
