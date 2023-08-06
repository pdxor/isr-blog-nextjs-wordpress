import React from 'react';

interface SH1TextProps {
  text: string;
}

const SH1Text: React.FC<SH1TextProps> = ({ text }) => {
  const SH1styles = {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '20px',
    lineHeight: '125%',
    display: 'flex',
    justifyContent: 'center', // Center horizontally and vertically
    letterSpacing: '-0.015em',
    color: '#000000',
    flex: 'none',
    };

  return <h1 style={SH1styles}>{text}</h1>;
};

export default SH1Text;


{/* <SH1ext text="Hello" /> */}