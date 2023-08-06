import React from 'react';

interface H2TextProps {
  text: string;
}

const H2Text: React.FC<H2TextProps> = ({ text }) => {
  const h2Styles = {
    fontFamily: 'Playfair Display',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '28px',
    lineHeight: '37px',
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '-0.015em',
    color: '#000000',
    flex: 'none',
  };

  return <h2 style={h2Styles}>{text}</h2>;
};

export default H2Text;



{/* <H2Text text="Hello" /> */}