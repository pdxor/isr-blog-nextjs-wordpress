import React, { useState } from 'react';
import HeartOutline from '../icons/HeartOutline';
import Rewatch from '../icons/Rewatch';
import NavDashRewatchCard from './NavDashRewatchCard';

function NavDashRewatch() {
  return (
    <div className='pl-2 pr-2 pb-2'>
   
    <div className='overflow-x-auto'>
      <div className='flex'>
        <div className='p-1'>
          <NavDashRewatchCard />
        </div>
        <div className='p-1'>
        <NavDashRewatchCard />        </div>
        <div className='p-1'>
        <NavDashRewatchCard />     </div>
        <div className='p-1'>
        <NavDashRewatchCard />
        </div>
        <div className='p-1'>
        <NavDashRewatchCard />
        </div>
      </div>
    </div>

  </div>
);
}

    

export default NavDashRewatch;




// to do: pull the correct number of cards in somehow, 
