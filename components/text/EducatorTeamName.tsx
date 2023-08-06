import React from 'react';
import EducatorIconCard from '../EducatorIconCard';

const EducatorTeamName = () => {
  return (
    <div className="text-black text-center font-normal text-base leading-6 tracking-wider flex justify-center space-x-4">
      <div className="p-2">
        <EducatorIconCard />
      </div>
      <div className="p-2">
        <EducatorIconCard />
      </div>
    </div>
  );
};

export default EducatorTeamName;




// to do: make it so it populates how ever many educators there are. 1= centered, 2 both show, 3 or more it scrolls.  