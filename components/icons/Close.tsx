import React from 'react';

interface CloseProps {
  fill: string;
}

const Close: React.FC<CloseProps> = ({ fill }) => (
  <svg width="43" height="42" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill={fill} // Use the fill prop value here
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.7016 21.2552L31.9866 28.5742L28.5825 31.9943L21.2974 24.6752L13.6874 32.3209L10.2832 28.9008L17.8933 21.2552L10.2832 13.6095L13.6873 10.1895L21.2974 17.8351L28.5825 10.516L31.9866 13.9361L24.7016 21.2552Z"
    />
  </svg>
);

export default Close;
