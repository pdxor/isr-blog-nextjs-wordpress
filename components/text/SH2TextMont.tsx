import React from 'react';

interface SH2TextMontProps {
  text: string;
}

const SH2TextMont: React.FC<SH2TextMontProps> = ({ text }) => {
  const SH2TextMontstyles = {
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

  return <h2 style={SH2TextMontstyles}>{text}</h2>;
};

export default SH2TextMont;

{/* <SH2TextMont text="Hello" /> */}