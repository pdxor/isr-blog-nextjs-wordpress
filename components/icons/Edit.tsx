import React from 'react';

interface EditProps {
  fill: string;
}

const Edit: React.FC<EditProps> = ({ fill }) => (
  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M16.9349 29.8055L11 31.0023L12.1976 25.0641L16.9349 29.8055ZM13.3769 23.8848L18.1142 28.6262L30.99 15.7414L26.2519 11L13.3769 23.8848Z" fill="black" />
  </svg>
);

export default Edit;