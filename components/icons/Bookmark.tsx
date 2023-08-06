import React from 'react';

interface BookmarkProps {
  fill: string;
}

const Bookmark: React.FC<BookmarkProps> = ({ fill }) => (
  <svg width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 26.5266V9H22V26.5266L16.0914 22.1936L15.5 21.7599L14.9086 22.1936L9 26.5266Z" fill="white" stroke="black" stroke-width="2" />
  </svg>

);

export default Bookmark;
