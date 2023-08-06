import React from 'react';

interface SH1TextMontProps {
  text: string;
}

const SH1TextMont: React.FC<SH1TextMontProps> = ({ text }) => {
  const SH1TextMontstyles = {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '100',
    fontSize: '36px',
    lineHeight: '125%',
    display: 'flex',
    justifyContent: 'center', // Center horizontally and vertically
    letterSpacing: '-0.015em',
    color: '#000000',
    flex: 'none',
    };

  return <h1 style={SH1TextMontstyles}>{text}</h1>;
};

export default SH1TextMont;


{/* <SH1TextMont text="Hello" /> */}