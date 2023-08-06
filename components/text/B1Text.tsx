import React from 'react';

interface B1TextProps {
  text: string;
}

const B1Text: React.FC<B1TextProps> = ({ text }) => {
  const B1styles = {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '150%',
    letterSpacing: '-0.015px',
    color: '#000000',
  };

  return <p style={B1styles}>{text}</p>;
};

export default B1Text;




{/* 
<B1Text text="Hello" /> 
*/}