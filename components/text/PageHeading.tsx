import React from 'react';

interface HeadingProps {
  text: string;
}

const PageHeading: React.FC<HeadingProps> = ({ text }) => {
  return (
    <h1
      className="justify-center font-montserrat text-center text-black"
      style={{
        fontWeight: '400',
        fontSize: '36px',
        lineHeight: '44px',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        letterSpacing: '-0.015em',
      }}
    >
      {text}
    </h1>
  );
};

export default PageHeading;



{/* <Heading text="hello" /> */}