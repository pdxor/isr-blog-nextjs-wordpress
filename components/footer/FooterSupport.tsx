"use client"
import { useState } from 'react';
import RightChevron from '../icons/RightChevron';
import Down from '../icons/Down';
import SH4Text from '../text/SH4Text';
import Link from "next/link";

const FooterSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('');

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-black text-white mb-3">
      <div className="flex items-center pr-2 cursor-pointer" onClick={handleToggle}>
        <SH4Text text={'CONTACT US'} />
        <span className="ml-1 ">{isOpen ? <Down fill={'white'} /> : <RightChevron fill={'white'} />}</span>
      </div>
      {isOpen && (
        <div className="text-[#C3A08D] p-3">
          Contact Us
          <br>
          </br>
          Email: <Link href="mailto:btcuniversity@behindthechair.com">btcuniversity@behindthechair.com</Link>
          <br>
          </br>
          Phone: (800) 760-3010.
        </div>
      )}
    </div>
  );
};

export default FooterSupport;