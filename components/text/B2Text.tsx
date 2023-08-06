import React from 'react';

interface B2TextProps {
  text: string;
}

const B2Text: React.FC<B2TextProps> = ({ text }) => {
  const B2styles = {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '200%',
    letterSpacing: '-0.015em',
    color: '#000000',
    margin: '0',
  };

  return <p style={B2styles}>{text}</p>;
};

export default B2Text;





{/* <B2Text text="Hello" /> */}