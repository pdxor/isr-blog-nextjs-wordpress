import React from 'react';

interface RightArrowProps {
  fill: string;
}

const RightArrow: React.FC<RightArrowProps> = ({ fill }) => (
  <svg width="36" height="32" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M26 15.2441L14 27.2441L14 3.24414L26 15.2441Z" fill="white" />
    <rect y="11.3867" width="17" height="9" fill="white" />
  </svg>
);

export default RightArrow;