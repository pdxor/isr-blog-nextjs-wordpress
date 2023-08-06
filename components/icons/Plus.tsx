import React from 'react';

interface PlusProps {
  fill: string;
  width: string;
  height: string;
}

const Plus: React.FC<PlusProps> = ({ fill, width, height  }) => (
  <svg width={width} height={height} viewBox="0 0 25 25" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M17.9603 10.9348L13.3432 10.9645L13.3203 6.35904L11.2542 6.35904L11.2839 10.9779L6.66977 11.0078L6.66977 13.0565L11.2973 13.0339L11.3272 17.6496L13.3759 17.6496L13.3532 13.0238L17.9603 13.0009V10.9348Z" fill="black" />
  </svg>
);

export default Plus;