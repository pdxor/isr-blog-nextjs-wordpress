import React from 'react';
import Calendar from '../icons/Calendar';

type SaveYourSpotIconLeftProps = {
  link: string;
  text: string;
  textColor?: string;
  borderColor?: string;
  backgroundColor?: string;
  fill?: string;
  icon?: React.ReactNode;
};

const SaveYourSpotIconLeft = ({
  link,
  text,
  textColor = 'white',
  borderColor = 'white',
  backgroundColor = '#C4A18D',
  fill,
  icon,
}: SaveYourSpotIconLeftProps) => {
  return (
    <a
      href={link}
      className={`inline-flex justify-center items-center text-${textColor} border-${borderColor} bg-${backgroundColor}`}
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '12px',
        width: '176px',
        height: '40px',
        background: backgroundColor,
        borderRadius: '8px',
        flex: 'none',
        order: 0,
        flexGrow: 0,
      }}
    >
      <span style={{ marginRight: '5px' }}>{<Calendar fill={'black'}/>}</span>
      <span className="text-center">{text}</span>
    </a>
  );
};

export default SaveYourSpotIconLeft;


// to do: maybe, need to add an action, or maybe that action goes on the indivual button