import React from 'react';

interface T1TextProps {
  text: string;
}

const T1Text: React.FC<T1TextProps> = ({ text }) => {
  const T1styles = {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '10px',
    lineHeight: '100%',
    margin: '0',
    leadingTrim: 'both',
    textEdge: 'cap',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFeatureSettings: "'pnum' on, 'lnum' on, 'liga' off",
  };

  return <p style={T1styles}>{text}</p>;
};

export default T1Text;






{/* <T1Text text="Hello" /> */}