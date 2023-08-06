import React from 'react';

interface SH4TextProps {
  text: string;
}

const SH4Text: React.FC<SH4TextProps> = ({ text }) => {
  const SH4styles = {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: '12px',
    lineHeight: '14px',
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '0.04em',
    flex: 'none',
  };

  return <h2 style={SH4styles}>{text}</h2>;
};

export default SH4Text;





{/* <SH4Text text="Hello" /> */}