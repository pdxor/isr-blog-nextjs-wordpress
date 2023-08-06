import React from 'react';

interface B1BoldTextProps {
  text: string;
}

const B1BoldText: React.FC<B1BoldTextProps> = ({ text }) => {
  const B1styles = {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '150%',
    letterSpacing: '-0.015px',
    color: '#000000',
  };

  return <p style={B1styles}>{text}</p>;
};

export default B1BoldText;




{/* 
<B1BoldText text="Hello" /> 
*/}