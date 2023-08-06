import React from 'react';

interface RefreshProps {
  fill: string;
}

const Refresh: React.FC<RefreshProps> = ({ fill }) => (
  <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M17 19.9067L12.537 24.7449L8 19.9067H11C11 15.0675 15.03 11.1436 20 11.1436C22.395 11.1436 24.565 12.0608 26.179 13.5466L24.175 15.7189C23.094 14.6965 21.622 14.0646 20 14.0646C16.691 14.0646 14 16.6848 14 19.9067H17ZM27.463 15.0684L23 19.9067H26C26 23.1286 23.309 25.7488 20 25.7488C18.377 25.7488 16.906 25.1159 15.825 24.0945L13.821 26.2668C15.434 27.7526 17.605 28.6698 20 28.6698C24.97 28.6698 29 24.7459 29 19.9067H32L27.463 15.0684Z" fill="black" />
  </svg>
);

export default Refresh;