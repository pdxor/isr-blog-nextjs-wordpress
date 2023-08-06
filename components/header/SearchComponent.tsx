"use client"
import React, { useState } from 'react';
import SH4Text from '../text/SH4Text';
import SH2Text from '../text/SH2Text';
import Search from '../icons/Search';
import Close from '../icons/Close';
import Header from '../Header';
import UpcomingCourseCard from '../UpcomingCourseCard';
import SecondaryHalfButtonIconLeft from '../buttons/SecondaryHalfButtonIconLeft';
import HorizontalCourseCard from '../HorizontalCourseCard';
import ActiveFullForm from '../forms/ActiveFullForm';
import FullWidthForm from '../forms/FullWidthForm';
import FullBTCULogo from './FullBTCULogo';

function SearchComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="flex-none items-center mt-1">
        <button className="focus:outline-none" onClick={toggleMenu}>
          <Search />
        </button>
      </div>
      <div
  className={`fixed top-0 left-0 w-full h-full bg-white z-50 transition duration-500 ease-in-out transform ${
    isOpen ? '' : '-translate-x-full'
  } overflow-y-scroll`}
>
 
        <div className="flex justify-end mt-4 mr-4 items-start">
        <FullBTCULogo />
          <button className="focus:outline-none" onClick={closeMenu}>
            <Close fill={'black'} />
          </button>
        </div>
        <div className='flex justify-center p-2'>
          <FullWidthForm
            placeholder="Search"
            icon={<Search />}
          />
        </div>
        <div className='p-2'>
          <HorizontalCourseCard />
        </div>
        <div className='p-2'>
          <HorizontalCourseCard />
        </div>
        <div className='flex justify-center p-4'>
          <SH4Text text='Let us know what you would like to see more of on BTCU!' />
        </div>
        <div className='flex justify-center p-4'>
          <SecondaryHalfButtonIconLeft
            link="mailto:btcuniversity@behindthechair.com"
            text="SUGGEST A COURSE"
            textColor="black"
            borderColor="black"
            backgroundColor="white"
          />
        </div>
        <br>
        </br>
        <SH2Text text='UPCOMING CLASSES' color={''} />
        <div className='flex overflow-auto'>
          <div className='p-2'>
            <UpcomingCourseCard />
          </div>
          <div className='p-2'>
            <UpcomingCourseCard />
          </div>           <div className='p-2'>
            <UpcomingCourseCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchComponent;


// TO DO: EVERYTHING. 
