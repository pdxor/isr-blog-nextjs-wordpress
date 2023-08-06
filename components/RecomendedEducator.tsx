import React from 'react';
import RecomendedEducatorIconCard from './RecommendedEducatorIconCard';
import SH2Text from './text/SH2Text';

const RecommendedEducator = () => {
  return (
    <div className="text-black text-center font-normal text-base leading-6 tracking-wider">
      <div className='pt-2 pb-2'>
      <SH2Text text="RECOMMENDED EDUCATORS" color={''} />
      </div>
      <div className="flex overflow-x-auto space-x-4">
      
        <RecomendedEducatorIconCard />
        <RecomendedEducatorIconCard />
        <RecomendedEducatorIconCard />
        <RecomendedEducatorIconCard />
      </div>
    </div>
  );
};

export default RecommendedEducator;




// to do: Dynamically pull in recomended educators