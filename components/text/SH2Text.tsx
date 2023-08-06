import React from 'react';

interface SH2TextProps {
  text: string;
  color: string;
}

const SH2Text: React.FC<SH2TextProps> = ({ text, color }) => {
  const SH2styles = {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '125%',
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '0.64px',
    flex: 'none',
    color: color, // Apply the provided color
    paddingTop: '0.8rem', // Add padding to the top
    paddingBottom: '0.8rem', // Add padding to the bottom
  };

  return <h2 style={SH2styles}>{text}</h2>;
};

export default SH2Text;






{/*
 <SH2Text text="Hello" color="red" />
 */}