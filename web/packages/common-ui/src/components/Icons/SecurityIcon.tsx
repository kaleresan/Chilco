import React from 'react';

import { colors } from '../../styles/colors';

interface PropsType {
  color?: string;
  bgColor?: string;
}

export function SecurityIcon({
 bgColor = 'none',
 color = colors.white,
 ...props
}: PropsType) {
  return (
    <svg width="36" height="42" viewBox="0 0 36 42" fill={bgColor} {...props}>
      <rect x="11" y="17" width="15" height="12" rx="3" fill={color} />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M18.022 2C18.022 2 2.96491 6.06799 2.96491 6.95016C2.96491 7.50205 -0.342683 18.2175 4.99988 28.9898C7.08209 33.1882 18.022 40 18.022 40C18.022 40 27.8497 34.9763 30.9999 28.9898C34.1501 23.0033 34.4588 6.95016 34.4588 6.95016L18.022 2Z" stroke={color} stroke-width="2"/>
      <path d="M14.6179 18.0082V13.6445C14.6179 13.6445 15.2977 11.3428 17.9999 11.3428C20.7021 11.3428 22.2281 13.6445 22.2281 13.6445V18.0082" stroke={color} stroke-width="2" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7507 25.8109H19.2147V22.6416C19.2147 22.6416 21.8154 19.7432 18.5 19.7432C15.1846 19.7432 17.7507 22.6416 17.7507 22.6416V25.8109Z" fill={bgColor} />
    </svg>
  );
}
export default SecurityIcon;