import React from 'react';

const RightArrowIcon: React.FC<{
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
      style={style} // 전달된 style 적용
    >
      <path d="M8 4l8 8-8 8z" />
    </svg>
  );
};

export default RightArrowIcon;
