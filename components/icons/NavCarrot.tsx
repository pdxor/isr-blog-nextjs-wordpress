import React from 'react';

interface NavCarrotProps {
  fill: string;
}

const NavCarrot: React.FC<NavCarrotProps> = ({ fill }) => (
  <svg width="14" height="15" viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M2.9187 2.02832L4.70195 0.27832L11.6687 7.27832L4.70195 14.2783L2.9187 12.5283L8.1687 7.27832L2.9187 2.02832Z" fill={fill} />
    <mask id="mask0_568_3030" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="2" y="0" width="10" height="15">
      <path fillRule="evenodd" clipRule="evenodd" d="M2.9187 2.02832L4.70195 0.27832L11.6687 7.27832L4.70195 14.2783L2.9187 12.5283L8.1687 7.27832L2.9187 2.02832Z" fill="white" />
    </mask>
    <g mask="url(#mask0_568_3030)">
      <rect x="2.9187" y="0.27832" width="8.75" height="14" fill={fill} />
    </g>
  </svg>
);

export default NavCarrot;