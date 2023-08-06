import React from 'react';

interface T2TextProps {
  text: string;
}

const T2Text: React.FC<T2TextProps> = ({ text }) => {
  const T2styles = {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '7px',
    lineHeight: '100%',
    leadingTrim: 'both',
    textEdge: 'cap',
    display: 'flex',
    alignItems: 'center',
    fontFeatureSettings: "'pnum' on, 'lnum' on, 'liga' off",
    color: '#000000',
    margin: '0',
  };

  return <p style={T2styles}>{text}</p>;
};

export default T2Text;







{/* <T2Text text="Hello" /> */}