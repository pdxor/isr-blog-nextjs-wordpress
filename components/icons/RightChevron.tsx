import React from 'react';

interface RightChevronProps {
  fill: string;
}

const RightChevron: React.FC<RightChevronProps> = ({ fill }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path d="M9.5865 6.28627L15.3008 12.0006L9.5865 17.7148L8.57221 16.7006L13.2722 12.0006L8.57221 7.30056L9.5865 6.28627Z" />
  </svg>
);

export default RightChevron;
