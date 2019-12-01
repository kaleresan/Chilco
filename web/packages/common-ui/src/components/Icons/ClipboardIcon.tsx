import React from 'react';

import { colors } from '../../styles/colors';

interface PropsType {
  color?: string;
  bgColor?: string;
}

export function ClipboardIcon({
  bgColor = 'none',
  color = colors.white,
  ...props
}: PropsType) {
  return (
    <svg width="32" height="42" viewBox="0 0 32 42" fill={bgColor} {...props}>
      <rect
        x="10.9746"
        y="11.9624"
        width="13"
        height="1"
        rx="0.5"
        stroke={color}
      />
      <rect
        x="10.9746"
        y="17.9624"
        width="13"
        height="1"
        rx="0.5"
        stroke={color}
      />
      <rect
        x="10.9746"
        y="23.9624"
        width="13"
        height="1"
        rx="0.5"
        stroke={color}
      />
      <rect
        x="10.9746"
        y="29.9624"
        width="10"
        height="1"
        rx="0.5"
        stroke={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.97461 14.4624C7.80304 14.4624 8.47461 13.7909 8.47461 12.9624C8.47461 12.134 7.80304 11.4624 6.97461 11.4624C6.14618 11.4624 5.47461 12.134 5.47461 12.9624C5.47461 13.7909 6.14618 14.4624 6.97461 14.4624Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.97461 20.4624C7.80304 20.4624 8.47461 19.7909 8.47461 18.9624C8.47461 18.134 7.80304 17.4624 6.97461 17.4624C6.14618 17.4624 5.47461 18.134 5.47461 18.9624C5.47461 19.7909 6.14618 20.4624 6.97461 20.4624Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.97461 26.4624C7.80304 26.4624 8.47461 25.7909 8.47461 24.9624C8.47461 24.134 7.80304 23.4624 6.97461 23.4624C6.14618 23.4624 5.47461 24.134 5.47461 24.9624C5.47461 25.7909 6.14618 26.4624 6.97461 26.4624Z"
        stroke={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.97461 32.4624C7.80304 32.4624 8.47461 31.7909 8.47461 30.9624C8.47461 30.134 7.80304 29.4624 6.97461 29.4624C6.14618 29.4624 5.47461 30.134 5.47461 30.9624C5.47461 31.7909 6.14618 32.4624 6.97461 32.4624Z"
        stroke={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.15027 40.3209H28.2508C28.2508 40.3209 30.7256 40.488 30.6001 37.7391C30.4746 34.9903 30.4746 6.46244 30.4746 6.46244C30.4746 6.46244 30.2323 4.49809 28.2508 4.49809C26.2694 4.49809 23.8547 4.49809 23.8547 4.49809V6.46244H8.17182V4.49809H4.15027C4.15027 4.49809 1 4.50202 1 6.46244C1 8.42286 1 37.7391 1 37.7391C1 37.7391 1.40359 39.1971 2.01885 39.7014C2.63412 40.2056 4.15027 40.3209 4.15027 40.3209Z"
        stroke={color}
        stroke-width="2"
      />
      <path
        d="M8.28736 5.2074C8.28736 5.2074 8.11073 3.11344 13.426 3.11344C13.426 3.1037 14.0054 1 15.9747 1C17.9439 1 18.4171 3.11344 18.4171 3.11344C18.4171 3.11344 23.8547 2.53374 23.8547 4.49809"
        stroke={color}
        stroke-width="1.5"
      />
    </svg>
  );
}
export default ClipboardIcon;
