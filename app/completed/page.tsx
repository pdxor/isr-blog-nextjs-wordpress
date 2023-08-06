"use client"
import React, { useState } from 'react';
import CategoriesList from '@/components/CategoriesList';
import Dashboard from '@/components/CancelFlow';
import NavDashboard from '@/components/header/NavDashboard';
import H1Text from '@/components/text/H1Text';
import CourseCard from '@/components/CourseCard';
import NavDashCertificateCard from '@/components/header/NavDashCertificateCard';
import RightChevron from '@/components/icons/RightChevron';
import SH2Text from '@/components/text/SH2Text';
import Down from '@/components/icons/Down';
import NavDashRewatchCard from '@/components/header/NavDashRewatchCard';

const Completed = () => {
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);
  const [isCompletedOpen, setIsCompletedOpen] = useState(false);

  const handleCertificateClick = () => {
    setIsCertificateOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleCompletedClick = () => {
    setIsCompletedOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <>
      <NavDashboard />
      <CategoriesList />
      <div className='p-2'>
        <H1Text text="Certificates" />
        <div className="flex items-center pt-2 pb-2" onClick={handleCertificateClick}>
          <SH2Text text='ALL' color={''} />
          {isCertificateOpen ? <Down fill={'black'} /> : <RightChevron fill={'black'} />}
        </div>
        {isCertificateOpen && (
          <div className="mt-4 flex pb-2">
            <div className="flex flex-wrap gap-4 justify-center"> {/* Use 'gap-4' class for padding between cards */}
              <NavDashCertificateCard />
              <NavDashCertificateCard />
              <NavDashCertificateCard />
              <NavDashCertificateCard />
              <NavDashCertificateCard />
              <NavDashCertificateCard />
              <NavDashCertificateCard />
              <NavDashCertificateCard />
              <NavDashCertificateCard />
              <NavDashCertificateCard />
              <NavDashCertificateCard />
              <NavDashCertificateCard />
              <NavDashCertificateCard />
              <NavDashCertificateCard />
              <NavDashCertificateCard />
              <NavDashCertificateCard />
              <NavDashCertificateCard />
              <NavDashCertificateCard />
              <NavDashCertificateCard />
              <NavDashCertificateCard />
            </div>
          </div>
        )}
      </div>
      <div className="p-2">
        <H1Text text="Completed" />
        <div className="flex items-center pt-2 pb-2" onClick={handleCompletedClick}>
          <SH2Text text='ALL' color={''} />
          {isCompletedOpen ? <Down fill={'black'} /> : <RightChevron fill={'black'} />}
        </div>
        {isCompletedOpen && (
          <div className="mt-4 flex pb-2">
            <div className="flex flex-wrap gap-4 justify-center"> {/* Use 'gap-4' class for padding between cards */}
      
<NavDashRewatchCard />
<NavDashRewatchCard />
<NavDashRewatchCard />
<NavDashRewatchCard />
<NavDashRewatchCard />
<NavDashRewatchCard />
<NavDashRewatchCard />
<NavDashRewatchCard />
<NavDashRewatchCard />
<NavDashRewatchCard />
<NavDashRewatchCard />
<NavDashRewatchCard />
<NavDashRewatchCard />
<NavDashRewatchCard />
<NavDashRewatchCard />
<NavDashRewatchCard />
<NavDashRewatchCard />
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

