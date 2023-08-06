import Link from "next/link";
import React, { CSSProperties } from 'react';

type HeaderSubscribeButtonProps = {
  link: string;
  text: string;
  textColor?: string;
  borderColor?: string;
  backgroundColor?: string;
  padding?: string;
  width?: string;
  maxWidth?: string;
  height?: string;
}

const HeaderSubscribeButton = ({ link, text, textColor = 'black', borderColor = '#000000', backgroundColor = '#FFFFFF', padding = '8px 24px', width = '120px', maxWidth = '', height = '30px' }: HeaderSubscribeButtonProps) => {
  const buttonStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: padding,
    gap: '10px',
    width: width,
    maxWidth: maxWidth,
    height: height,
    background: backgroundColor,
    border: `2px solid ${borderColor}`,
    borderRadius: '8px',
    color: textColor,
    textDecoration: 'none',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 900,
    fontSize: '12px',
    lineHeight: '14px',
    textAlign: 'center',
    letterSpacing: '0.04em',
    
  };

  return (
    <Link href={link}>
      <button className="primaryfullbutton" style={buttonStyle as CSSProperties}>{text}</button>
    </Link>
  );
};

export default HeaderSubscribeButton;

    //   <HeaderSubscribeButton
    //   link="/sign-up"
    //   text="SUBSCRIBE"
    //   textColor="white"
    //   borderColor="#C4A18D"
    //   backgroundColor="#C4A18D"
    // />