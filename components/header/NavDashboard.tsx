"use client"
import React, { useState } from 'react';
import RightChevron from '../icons/RightChevron';
import Down from '../icons/Down';
import SH4Text from '../text/SH4Text';
import NavDashInProgress from './NavDashInProgress';
import NavDashFav from './NavDashFav';
import Rewatch from '../icons/Rewatch';
import CertificateIcon from '../icons/CertificateIcon';
import PlayVideo from '../icons/PlayVideo';
import NavDashCertificate from './NavDashCertificate';
import NavDashRewatch from './NavDashRewatch';
import HeartDash from '../icons/HeartDash';

const NavDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('');

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleTabClick = (tabName: React.SetStateAction<string>) => {
    setActiveTab(tabName);
  };

  return (
    <div className="bg-black text-white">
      <div className="flex items-center p-2" onClick={handleToggle}>
        <SH4Text text={'MY DASHBOARD'} />
        <span className="ml-1">{isOpen ? <Down fill={'white'} /> : <RightChevron fill={'white'} />}</span>
      </div>
      {isOpen && (
        <div>
          <div className="p-2 flex">
            <div className="w-1/5 flex justify-center" onClick={() => handleTabClick('inProgress')}>
              <div className={`flex justify-center items-center ${activeTab === 'inProgress' ? 'active-navdashboard-tab' : ''}`}>
              <PlayVideo fill={activeTab === 'inProgress' ? 'black' : 'white'} />

              </div>
            </div>
            <div className="w-1/5 flex justify-center" onClick={() => handleTabClick('favorites')}>
              <div className={`flex justify-center items-center ${activeTab === 'favorites' ? 'active-navdashboard-tab' : ''}`}>
                <HeartDash fill={activeTab === 'favorites' ? 'black' : 'white'} />

              </div>
            </div>
            <div className="w-1/5 flex justify-center" onClick={() => handleTabClick('certificate')}>
              <div className={`flex justify-center items-center ${activeTab === 'certificate' ? 'active-navdashboard-tab' : ''}`}>
                <CertificateIcon fill={activeTab === 'certificate' ? 'black' : 'white'} />
              </div>
            </div>
            <div className="w-1/5 flex justify-center" onClick={() => handleTabClick('Rewatch')}>
              <div className={`flex justify-center items-center ${activeTab === 'Rewatch' ? 'active-navdashboard-tab' : ''}`}>
                <Rewatch fill={activeTab === 'Rewatch' ? 'black' : 'white'} />
              </div>
            </div>
          </div>
          {activeTab === 'inProgress' && <NavDashInProgress />}
          {activeTab === 'favorites' && <NavDashFav />}
          {activeTab === 'certificate' && <NavDashCertificate />}
          {activeTab === 'Rewatch' && <NavDashRewatch />}
        </div>
      )}
    </div>
  );
};

export default NavDashboard;













// to do: if not signed in, this just doesn't even show, wrap in <authcontent> 