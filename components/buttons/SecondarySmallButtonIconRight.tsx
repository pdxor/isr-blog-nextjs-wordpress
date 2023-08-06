import React from 'react';
import SH4Text from '../text/SH4Text';

type SecondarySmallButtonIconRightProps = {
  link: string;
  text: string;
  textColor?: string;
  borderColor?: string;
  backgroundColor?: string;
  fill?: string; // make fill prop optional
  icon?: React.ReactNode; // add icon prop
};

const SecondarySmallButtonIconRight = ({ link, text, textColor = 'white', borderColor = 'white', backgroundColor = 'black', fill, icon }: SecondarySmallButtonIconRightProps) => {
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
      width: '120px',
      height: '40px',
      left: '20px',
      top: '185px',
      // gap: '10px',
      background: backgroundColor,
      border: `2px solid ${borderColor}`,
      borderRadius: '8px',
      color: textColor,
       }}
    >
     
     <SH4Text text={text}/>

      {icon}
    </a>
  );
};

export default SecondarySmallButtonIconRight;

