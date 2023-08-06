import Link from "next/link";
import React from 'react';
import SH4Text from "../text/SH4Text";

type PrimaryHalfButtonProps = {
  link: string;
  text: string;
  textColor?: string;
  borderColor?: string;
  backgroundColor?: string;
  padding?: string;
  width?: string;
  maxWidth?: string;
  height?: string;
  type?: string;
  disabled?: string;
}

const PrimaryHalfButton = ({ link, text, textColor = 'white', borderColor = 'white', backgroundColor = 'black', padding = '24px', width = '100%', maxWidth = '192px', height = '40px' }: PrimaryHalfButtonProps) => {
  return (
    <div className="flex justify-center items-center">
      <a
        href={link}
        className={`inline-flex justify-center items-center text-${textColor} border-${borderColor} bg-${backgroundColor}`}
        style={{
          display: 'flex',
          width: '192px',
          height: '60px',
          padding: '24px',
          alignItems: 'center', 
          gap: '10px',
          flexShrink: 0,
          borderRadius: '8px',
          border: `2px solid ${borderColor}`,
          background: backgroundColor,
          color: textColor,
        }}
      >
           <SH4Text text={text}/>
      </a>
    </div>
  );
};

export default PrimaryHalfButton;

{/* <PrimaryHalfButton
        link="https://example.com"
        text="Click me!"
        textColor="white"
        borderColor="black"
        backgroundColor="black"
      /> */}