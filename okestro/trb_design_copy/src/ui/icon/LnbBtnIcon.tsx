import React from 'react';

const LnbBtnIcon: React.FC<{
  color?: string;
  size?: number;
  style?: React.CSSProperties;
}> = ({ color = 'black', size = 24, style }) => {
  return (
    <svg
      width="48"
      height="43"
      viewBox="0 0 48 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_3153_2366)">
        <rect
          x="8"
          y="7"
          width="32"
          height="26"
          rx="13"
          fill="white"
          shape-rendering="crispEdges"
        />
        <rect
          x="8.5"
          y="7.5"
          width="31"
          height="25"
          rx="12.5"
          stroke="#DBDFEA"
          shape-rendering="crispEdges"
        />
        <path
          d="M17.5 16.5V23.5"
          stroke="#BAAFED"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M20.5 16.5V23.5"
          stroke="#9783ED"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M30.0625 20.7757C30.6458 20.431 30.6458 19.569 30.0625 19.2243L24.8125 16.1213C24.2292 15.7766 23.5 16.2075 23.5 16.8971L23.5 23.1029C23.5 23.7925 24.2292 24.2234 24.8125 23.8787L30.0625 20.7757Z"
          fill="#7B64DE"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_3153_2366"
          x="0"
          y="1"
          width="48"
          height="42"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_3153_2366"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_3153_2366"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default LnbBtnIcon;
