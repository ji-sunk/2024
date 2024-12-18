import React from 'react';

const ZoomInIcon: React.FC<{
  color?: string;
  size?: number;
  style?: React.CSSProperties;
}> = ({ color = 'black', size = 24, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      width={size}
      height={size}
      style={style}
    >
      <path
        d="M10.8625 13.5L5.20569 19.1569"
        stroke="#1A1A1A"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M8.36401 20.25L4.12144 20.2501L4.12137 16.0074"
        stroke="#1A1A1A"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.489 10.8713L19.1459 5.21448"
        stroke="#1A1A1A"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M15.9875 4.12134L20.2301 4.12127L20.2302 8.36398"
        stroke="#1A1A1A"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ZoomInIcon;
