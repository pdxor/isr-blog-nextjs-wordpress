import React from 'react';

interface H1TextCenteredProps {
  text: string;
}

const H1Text: React.FC<H1TextCenteredProps> = ({ text }) => {
  const h1CenteredStyles = {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '36px',
    lineHeight: '44px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',  // Added this line
    letterSpacing: '-0.015em',
    color: '#000000',
    flex: 'none',
    order: 1,
    flexGrow: 0,
  };

  return <h1 style={h1CenteredStyles}>{text}</h1>;
};

export default H1Text;


{/* <H1Text text="Hello" /> */}