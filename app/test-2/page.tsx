"use client"
import React, { useState } from 'react';

import CategoriesList from '@/components/CategoriesList';
import Dashboard from '@/components/CancelFlow';
import NavDashboard from '@/components/header/NavDashboard';
import H1Text from '@/components/text/H1Text';
import Down from '@/components/icons/Down';
import RightChevron from '@/components/icons/RightChevron';
import SH2Text from '@/components/text/SH2Text';
import CourseCard from '@/components/CourseCard';

const Completed = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavDashboard />
      <CategoriesList />
      <div className='p-2'>
        <H1Text text="Completed" />
        <div className="flex items-center pt-2 pb-2" onClick={handleClick}>
          <SH2Text text='LAST 30 DAYS' color={''} />
          {isOpen ? <Down fill={'black'} /> : <RightChevron fill={'black'} />}
        </div>
        {isOpen && (
          <div className="mt-4">
            <div className="flex overflow-x-auto space-x-4">
              {/* <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard /> */}
            </div>
          </div>
        )}
      </div>
    </>
  );
};


export default Completed;





// to do: dynamically pull completed courses, also does heather want anything other than last 30 days? also add in auth content here, didn't add it yet, because i was testing while signed out. but it should direct user to the login page if not signed in. 
// update: show all completled courses here and just show based on last completeed. completed means they recieved a Certificate, which is important to note because eventually we will be requiring quizes to get a certificate

