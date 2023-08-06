import Link from "next/link";
import React from 'react';
import SH4Text from "../text/SH4Text";

type PrimaryFullButtonProps = {
  link: string;
  text: string;
  textColor?: string;
  borderColor?: string;
  backgroundColor?: string;
}

const PrimaryFullButton = ({ link, text, textColor = 'white', borderColor = 'white', backgroundColor = 'black' }: PrimaryFullButtonProps) => {
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
        width: '400px',
        height: '60px',
        left: '20px',
        top: '23px',
        gap: '10px',
        background: backgroundColor,
        border: `2px solid ${borderColor}`,
        borderRadius: '8px',
        color: textColor,
      }}
    >
           <SH4Text text={text}/>

    </a>
  );
};

export default PrimaryFullButton;








{/* <PrimaryFullButton
        link="https://example.com"
        text="Click me!"
        textColor="white"
        borderColor="black"
        backgroundColor="black"
      /> */}