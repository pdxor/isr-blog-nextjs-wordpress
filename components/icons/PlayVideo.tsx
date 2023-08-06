import React from 'react';

interface PlayVideoProps {
  fill: string;
}

const PlayVideo: React.FC<PlayVideoProps> = ({ fill }) => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_1622_8654)">
      <rect width="24.3871" height="24.3871" rx="12.1935" fill="transparent" />
      <path
        d="M9.15797 17.2776C8.89034 17.4552 8.61951 17.4656 8.34546 17.3088C8.07142 17.1519 7.93413 16.9093 7.93359 16.5808V8.09648C7.93359 7.76859 8.07088 7.52594 8.34546 7.36855C8.62004 7.21116 8.89088 7.22154 9.15797 7.3997L15.7013 11.6419C15.9422 11.8058 16.0626 12.0381 16.0626 12.3387C16.0626 12.6392 15.9422 12.8715 15.7013 13.0354L9.15797 17.2776ZM9.53933 15.0848L13.7544 12.3387L9.53933 9.59252V15.0848Z"
        fill={fill}
      />
    </g>
    <defs>
      <clipPath id="clip0_1622_8654">
        <rect width="24.3871" height="24.3871" rx="12.1935" fill={fill} />
      </clipPath>
    </defs>
  </svg>
);

export default PlayVideo;