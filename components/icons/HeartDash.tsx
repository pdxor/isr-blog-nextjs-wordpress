import React from 'react';

interface HeartDashProps {
  fill: string;
}

const HeartDash: React.FC<HeartDashProps> = ({ fill }) => (
  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M20.9996 15.8204C18.796 12.2109 12.5996 13.2646 12.5996 17.7875C12.5996 20.9019 16.4993 24.0864 20.9996 28.35C25.5006 24.0864 29.3996 20.9019 29.3996 17.7875C29.3996 13.2492 23.1871 12.2376 20.9996 15.8204Z" fill={fill} />
  </svg>
);

export default HeartDash;