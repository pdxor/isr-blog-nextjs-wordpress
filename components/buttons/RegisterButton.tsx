import React from 'react';
import Link from "next/link";
import SH4Text from '../text/SH4Text';
// this button is used on pages to resgister (aka checkout) and purchase a class a la carte, which means there is not 1 link that works for all the buttons.

interface RegisterButtonProps {
  onClick: () => void;
  text: string;
  link: string;
}

const RegisterButton: React.FC<RegisterButtonProps> = ({ onClick, text, link }) => {
  return (
    <Link href={link}
        onClick={onClick}
        style={{
          backgroundColor: 'red',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '4px',
          border: 'none',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bold',
          textDecoration: 'none',
        }}
      >
           <SH4Text text={text}/>
    </Link>
  );
};

export default RegisterButton;


{/* TO DO: move this button to whereever it belongs & update links */}
