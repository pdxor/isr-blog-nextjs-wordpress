import React from 'react';
import SH2Text from './text/SH2Text';
import AboutTheEducatorCard from './AboutTheEducatorCard';

const AboutTheEducator = () => {
  return (
    <div>
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <SH2Text text="ABOUT THE EDUCATOR" color="black" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <AboutTheEducatorCard />
          <AboutTheEducatorCard />
        </div>
      </div>
    </div>
  );
}

export default AboutTheEducator;




// TO DO: everything