import React from 'react';

import { colors } from '../../styles/colors';

interface PropsType {
  color?: string;
  bgColor?: string;
}

export function SettingsWheelIcon({
  color = colors.primary,
  bgColor = colors.white
}: PropsType) {
  return (
    <svg width="30" height="29" fill="none" viewBox="0 0 30 29">
      <path
        fill={bgColor}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15 25.4C20.9647 25.4 25.8 20.5647 25.8 14.6C25.8 8.63531 20.9647 3.79999 15 3.79999C9.03534 3.79999 4.20001 8.63531 4.20001 14.6C4.20001 20.5647 9.03534 25.4 15 25.4Z"
      />
      <rect
        rx="1.2"
        x="18.9106"
        width="4.8"
        y="0.534912"
        height="28.8"
        transform="rotate(25 18.9106 0.534912)"
        fill={bgColor}
      />
      <rect
        rx="1.2"
        x="6.73917"
        y="2.56348"
        width="4.8"
        height="28.8"
        transform="rotate(-25 6.73917 2.56348)"
        fill={bgColor}
      />
      <rect
        rx="1.2"
        y="11.9302"
        width="4.8"
        x="0.647583"
        height="28.8"
        transform="rotate(-70 0.647583 11.9302)"
        fill={bgColor}
      />
      <rect
        rx="1.2"
        x="27.7108"
        y="7.41968"
        width="4.8"
        height="28.8"
        fill={bgColor}
        transform="rotate(70 27.7108 7.41968)"
      />
      <path
        fill={color}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15 21.8C18.9764 21.8 22.2 18.5765 22.2 14.6C22.2 10.6236 18.9764 7.40002 15 7.40002C11.0235 7.40002 7.79999 10.6236 7.79999 14.6C7.79999 18.5765 11.0235 21.8 15 21.8Z"
      />
    </svg>
  );
}
export default SettingsWheelIcon;
