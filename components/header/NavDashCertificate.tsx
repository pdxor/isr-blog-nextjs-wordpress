import React, { useState } from 'react';
import AuthContentNoPush from '../AuthContentNoPush';
import UnAuthContent from '../UnAuthContent';
import NavDashCertificateCard from './NavDashCertificateCard';

function NavDashCertificate() {
  return (
    <div className='pl-2 pr-2 pb-2'>

      <div className='overflow-x-auto'>
        <div className='flex'>
          <div className='p-1'>
            <NavDashCertificateCard />
          </div>
          <div className='p-1'>
            <NavDashCertificateCard />
          </div>
          <div className='p-1'>
            <NavDashCertificateCard />      </div>
          <div className='p-1'>
            <NavDashCertificateCard />
          </div>
          <div className='p-1'>
            <NavDashCertificateCard />
          </div>
          <div className='p-1'>
            <NavDashCertificateCard />
          </div>
          <div className='p-1'>
            <NavDashCertificateCard />
          </div>
          <div className='p-1'>
            <NavDashCertificateCard />
          </div>
          <div className='p-1'>
            <NavDashCertificateCard />
          </div>
          <div className='p-1'>
            <NavDashCertificateCard />
          </div>
          <div className='p-1'>
            <NavDashCertificateCard />
          </div>
        </div>
      </div>


    </div>
  );
}

export default NavDashCertificate;




