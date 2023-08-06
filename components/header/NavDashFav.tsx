import React, { useState } from 'react';
import NavDashFavCard from './NavDashFavCard';
import EducatorIconCard from '../EducatorIconCard';


function NavDashFav() {
  return (
    <div className='pl-2 pr-2 pb-2'>

    <div className='overflow-x-auto'>
      <div className='flex'>
        <div className='p-1'>
          <NavDashFavCard />
        </div>
        <div className='p-1'>
          <NavDashFavCard />
        </div>
        <div className='p-1'>
        <NavDashFavCard />      </div>
        <div className='p-1'>
          <NavDashFavCard />
        </div>
        <div className='p-1'>
          <NavDashFavCard />
        </div>
      </div>
    </div>
    <div className='overflow-x-auto'> 
        <div className='flex'>
        <div className='p-1' style={{minWidth: '180px', flexShrink: 0}}>
            <EducatorIconCard />
  </div>
 
  <div className='p-1' style={{minWidth: '180px', flexShrink: 0}}>
            <EducatorIconCard />
  </div>
  <div className='p-1' style={{minWidth: '180px', flexShrink: 0}}>
  <EducatorIconCard />
  </div>
  <div className='p-1' style={{minWidth: '180px', flexShrink: 0}}>
  <EducatorIconCard />
  </div>
  <div className='p-1' style={{minWidth: '180px', flexShrink: 0}}>
  <EducatorIconCard />
  </div>
  <div className='p-1' style={{minWidth: '180px', flexShrink: 0}}>
  <EducatorIconCard />
  </div>
  <div className='p-1' style={{minWidth: '180px', flexShrink: 0}}>
  <EducatorIconCard />
  </div>
    </div> 
     </div> 
  </div>
);
}

    

export default NavDashFav;




// to do: pull the correct number of cards in somehow, 
// to do: i commented out all the educator iconcards, because when you add a buildClientSchema, it makes them weirdly small and also because we haven't set up the favorite an educator yet. 
