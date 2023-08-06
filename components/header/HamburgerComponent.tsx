import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FullBTCULogo from './FullBTCULogo';
import SH4Text from '../text/SH4Text';
import H1Text from '../text/H1Text';
import SH2Text from '../text/SH2Text';
import Close from '../icons/Close';
import Hamburger from '../icons/Hamburger';
import PrimaryHalfButton from '../buttons/PrimaryHalfButton';

function HamburgerComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <div className="flex items-center">


      {/* Hamburger menu */}
      <div className="flex-none items-center mt-1">
        <button className="focus:outline-none" onClick={toggleMenu}>
          <Hamburger fill={'black'} />
        </button>
      </div>


      {/* Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-50 transition duration-500 ease-in-out transform ${isOpen ? '' : '-translate-x-full'
          }`}
      >

        <div className="flex justify-end mt-4 mr-4 items-start">
          {/* Logo */}
          <span onClick={handleLinkClick}>
           
          <FullBTCULogo />

              </span>
          <button className="focus:outline-none" onClick={toggleMenu}>
                  
             <Close fill={'black'} />
          </button>
        </div>
        <div className="flex items-center pb-2 pt-0">
        </div>
        <div className='pt-4 pl-3 pr-2'>
          <div className='flex'>
            <SH4Text text="You are logged in as:&nbsp; " />
            <SH4Text text="Name-here@gmail.com" />
            {/* to do: dynamically pull in email */}
          </div>
          <div className='pt-4 pb-2'>
            <H1Text text='My Info' />
          </div>
            <Link href="/profile">
              <span onClick={handleLinkClick}>
                <SH2Text text="PROFILE" color={''} />
              </span>
            </Link>

            <Link href="/checkout">
              <span onClick={handleLinkClick}>
                <SH2Text text="CART" color={''} />
              </span>
            </Link>
        
              {/* <Link href="/search">
    <span onClick={handleLinkClick}>
      <SH2Text text="SEARCH" color={''} />
    </span>
  </Link> */}

          {/* to do: search page in btcu 3.0 */}
          <div className='pt-2 pb-2'>
            <H1Text text='Resources' />
          </div>
        
            <Link href="/support">
              <span onClick={handleLinkClick}>
                <SH2Text text="SUPPORT" color={''} />
              </span>
            </Link>
     
    
            <Link href="/subscribe">
              <span onClick={handleLinkClick}>
                <SH2Text text="BTCU SUBSCRIPTION INFO" color={''} />
              </span>
            </Link>
         
          <div className='flex'>
         
          </div>
          {/* to do: dynamically pull in this info */}
          {/*  
            <Link href="/settings">
              <SH2Text text='SETTINGS' color={''} />
            </Link>
          */}
          {/* to do: when we get futher, add in a settings page. for now, we will not have this.  */}
            <Link href="/support">
              <span onClick={handleLinkClick}>
                <SH2Text text="FAQ & CUSTOMER SUPPORT" color={''} />
              </span>
            </Link>
          <div className='flex flex-col items-start pt-5'>
          <PrimaryHalfButton
            link="/sign-up"
            text="GIFT A SUBSCRIPTION"
            textColor="white"
            borderColor="black"
            backgroundColor="black"
          />
          <br />
       
               <PrimaryHalfButton
            link="/"
            text="LOGOUT"
            textColor="black"
            borderColor="black"
            backgroundColor="white"
          />

</div>
{/* to do: this log out button doesn't log the user out.  */}
        </div>
      </div>
    </div>


  );
}

export default HamburgerComponent;
