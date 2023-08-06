
import React from 'react';
import RecentlyReleased from './RecentlyReleased';
import Upcoming from './Upcoming';
import StudentsAreViewing from './StudentsAreViewing';
import H1Text from './text/H1Text';
import SH2Text from './text/SH2Text';
import TrendingThisWeek from './TrendingThisWeek';
import SH1Text from './text/SH1Text';
import B1Text from './text/B1Text';
import SH4Text from './text/SH4Text';
import RightArrow from './icons/RightArrow';


function CookieBanner() {
  return (
    <div>
      <SH1Text text='This website uses cookies'/>
      <B1Text text='We use cookies to make sure this website can function. By continuing to browse on this website, you agree to our use of cookies.'/>
     <button className='flex'>
     <SH4Text text='CONTINUE TO SITE'/>
<RightArrow fill={''} />
     </button>
    </div>
  );
}

export default CookieBanner;

// to do: add this to where ever we need it? also make it so once it hits continue to site, it doesn't keep popping up. 