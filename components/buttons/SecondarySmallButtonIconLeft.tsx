import React from 'react';
import SH4Text from '../text/SH4Text';

type SecondarySmallButtonIconLeftProps = {
  link: string;
  text: string;
  textColor?: string;
  borderColor?: string;
  backgroundColor?: string;
  fill?: string;
  icon?: React.ReactNode;
};

const SecondarySmallButtonIconLeft = ({
  link,
  text,
  textColor = 'white',
  borderColor = 'white',
  backgroundColor = '#C4A18D',
  fill,
  icon,
}: SecondarySmallButtonIconLeftProps) => {
  return (
    <a
      href={link}
      className={`inline-flex justify-center items-center text-${textColor} border-${borderColor} bg-${backgroundColor}`}
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0px',
        width: '120px',
        height: '40px',
        background: backgroundColor,
        borderRadius: '8px',
        flex: 'none',
        order: 0,
        flexGrow: 0,
      }}
    >
      {icon}
      <SH4Text text={text}/>

    </a>
  );
};

export default SecondarySmallButtonIconLeft;


// to do: maybe, need to add an action, or maybe that action goes on the indivual button