import React from 'react';

interface B1TextWhiteProps {
  text: string;
}

const B1TextWhite: React.FC<B1TextWhiteProps> = ({ text }) => {
  const B1styles = {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '150%',
    letterSpacing: '-0.015px',
    color: 'white',
  };

  return <p style={B1styles}>{text}</p>;
};

export default B1TextWhite;




{/* 
<B1Text text="Hello" /> 
*/}