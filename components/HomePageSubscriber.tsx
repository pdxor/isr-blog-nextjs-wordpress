
import React from 'react';
import RecentlyReleased from './RecentlyReleased';
import Upcoming from './Upcoming';
import StudentsAreViewing from './StudentsAreViewing';
import H1Text from './text/H1Text';
import SH2Text from './text/SH2Text';
import TrendingThisWeek from './TrendingThisWeek';


function HomePageSubscriber() {
  return (
    <div>
        <div>
      There will be 3 total homepages (dependant on who is viewing).
      <br />
      <div className='text-red'>
        Below is the home page, for those who are subscribers and are signed in! 
      </div>

    </div>


  <RecentlyReleased />
   <Upcoming />
<TrendingThisWeek />
   <SH2Text text='RECOMENDED EDUCATORS' color={''}/>


   <StudentsAreViewing />
   <SH2Text text='MY COURSES' color={''}/>

    </div>
  );
}

export default HomePageSubscriber;
