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
      <path d="M12 2.25c.45 0 .9.213 1.2.638l2.458 4.986 5.444.791c.99.144 1.387 1.362.67 2.059l-3.937 3.84.929 5.419c.17.993-.87 1.745-1.758 1.279L12 18.805l-4.905 2.579c-.888.466-1.928-.286-1.758-1.279l.929-5.419-3.937-3.84c-.717-.697-.32-1.915.67-2.059l5.444-.791 2.458-4.986c.3-.425.75-.638 1.2-.638z" />
    </svg>
  );
};

export default MarkFavorites;
