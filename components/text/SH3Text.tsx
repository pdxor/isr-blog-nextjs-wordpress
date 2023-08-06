import React from 'react';

interface SH3TextProps {
  text: string;
}

const SH3Text: React.FC<SH3TextProps> = ({ text }) => {
  const SH3styles = {
    fontFamily: 'Playfair Display',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '125%',
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '0.04em',
    color: '#000000',
    flex: 'none',
  };

  return <h2 style={SH3styles}>{text}</h2>;
};

export default SH3Text;




{/* <SH3Text text="Hello" /> */}