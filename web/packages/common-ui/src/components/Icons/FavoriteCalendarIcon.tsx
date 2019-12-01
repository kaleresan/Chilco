import React from 'react';

import { colors } from '../../styles/colors';

interface PropsType {
  color?: string;
  bgColor?: string;
}

export function FavoriteCalendarIcon({
  bgColor = 'none',
  color = colors.white,
  ...props
}: PropsType) {
  return (
    <svg width="32" height="36" viewBox="0 0 32 36" fill={bgColor}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.21091 4.9725C5.21091 4.9725 1.37757 4.85686 1.37757 8.44167C1.37757 12.0265 1.37757 33.4796 1.37757 33.4796C1.37757 33.4796 0.978297 34.9068 4.22645 34.9068C7.4746 34.9068 29.2329 34.9068 29.2329 34.9068C29.2329 34.9068 30.968 35.0676 30.968 32.4383C30.968 29.809 30.968 7.12805 30.968 7.12805C30.968 7.12805 31.0555 4.9725 28.3545 4.9725C25.6535 4.9725 25.8222 4.9725 25.8222 4.9725V1.31381H21.8769V4.9725H10.9399V1.31381H6.70421V4.9725H5.21091Z"
        stroke={color}
        stroke-width="1.7"
      />
      <path
        d="M6.70422 4.97247V8.42775H10.7999V4.97247"
        stroke={color}
        stroke-width="1.7"
      />
      <path
        d="M21.8374 5.11652V8.83905H25.8978V4.57904"
        stroke={color}
        stroke-width="1.7"
      />
      <path d="M1.33386 13.9071H30.9707" stroke={color} stroke-width="1.6" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.5 26.75L12.6794 28.7586L13.4091 24.5043L10.3181 21.4914L14.5897 20.8707L16.5 17L18.4103 20.8707L22.6819 21.4914L19.5909 24.5043L20.3206 28.7586L16.5 26.75Z"
        stroke={color}
      />
    </svg>
  );
}
export default FavoriteCalendarIcon;
