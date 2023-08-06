import React from 'react';
import SH4Text from '../text/SH4Text';

type SecondaryHalfButtonIconLeftProps = {
  link: string;
  text: string;
  textColor?: string;
  borderColor?: string;
  backgroundColor?: string;
  fill?: string; // make fill prop optional
  icon?: React.ReactNode; // add icon prop
};

const SecondaryHalfButtonIconLeft = ({ link, text, textColor = 'white', borderColor = 'white', backgroundColor = 'black', fill, icon }: SecondaryHalfButtonIconLeftProps) => {
  return (
    <a
    href={link}
    className={`inline-flex justify-center items-center text-${textColor} border-${borderColor} bg-${backgroundColor}`}
    style={{
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '24px',
      width: '192px',
      height: '60px',
      left: '20px',
      top: '104px',
      // gap: '10px',
      background: backgroundColor,
      border: `2px solid ${borderColor}`,
      borderRadius: '8px',
      color: textColor,
      }}
    >
   <span style={{padding: '0 5px'}}>{icon}</span>
      <SH4Text text={text}/>
    </a>
  );
};

export default SecondaryHalfButtonIconLeft;
 