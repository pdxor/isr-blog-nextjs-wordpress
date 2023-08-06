import React from 'react';

interface MultipleVideosProps {
  fill: string;
}

const MultipleVideos: React.FC<MultipleVideosProps> = ({ fill }) => (
  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 17H11V29C11 29.5304 11.2107 30.0391 11.5858 30.4142C11.9609 30.7893 12.4696 31 13 31H25V29H13V17Z" fill={fill} />
    <path d="M29 11H17C16.4696 11 15.9609 11.2107 15.5858 11.5858C15.2107 11.9609 15 12.4696 15 13V25C15 25.5304 15.2107 26.0391 15.5858 26.4142C15.9609 26.7893 16.4696 27 17 27H29C29.5304 27 30.0391 26.7893 30.4142 26.4142C30.7893 26.0391 31 25.5304 31 25V13C31 12.4696 30.7893 11.9609 30.4142 11.5858C30.0391 11.2107 29.5304 11 29 11ZM20 23V15L27 19L20 23Z" fill={fill} />
  </svg>
);

export default MultipleVideos;
