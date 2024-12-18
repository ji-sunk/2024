import React from 'react';

const MarkFavorites: React.FC<{
  color?: string;
  size?: number;
  style?: React.CSSProperties;
}> = ({ color = 'black', size = 16, style }) => {
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
        d="M17 9L12 14L7 9"
        stroke="#1A1A1A"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default MarkFavorites;
