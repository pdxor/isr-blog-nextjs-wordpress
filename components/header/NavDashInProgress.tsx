import React, { useState } from 'react';
import NavDashInProgressCard from './NavDashInProgressCard';

function NavDashInProgress() {
  return (
    <div className='pl-2 pr-2 pb-2'>
  
      <div className='overflow-x-auto'>
        <div className='flex'>
          <div className='p-1'>
            <NavDashInProgressCard />
          </div>
          <div className='p-1'>
            <NavDashInProgressCard />
          </div>
          <div className='p-1'>
            <NavDashInProgressCard />
          </div>
          <div className='p-1'>
            <NavDashInProgressCard />
          </div>
          <div className='p-1'>
            <NavDashInProgressCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavDashInProgress;


// to do: pull the correct number of cards in somehow, 
