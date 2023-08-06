import React from 'react';

interface SH2TextMontStyledAsH1Props {
  text: string;
}

const SH2TextMontStyledAsH1: React.FC<SH2TextMontStyledAsH1Props> = ({ text }) => {
  const SH2TextMontStyledAsH1Styles = {
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

  return <h2 style={SH2TextMontStyledAsH1Styles}>{text}</h2>;
};

export default SH2TextMontStyledAsH1;

{/* <SH2TextMontStyledAsH1 text="Hello" /> */}