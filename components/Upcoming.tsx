import React from 'react';
import SH2Text from './text/SH2Text';
import Filter from './icons/Filter';
import Refresh from './icons/Refresh';
import UpcomingCourseCard from './UpcomingCourseCard';

function Upcoming() {
  return (
    <div>
      <div>
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
      <SH2Text text=" UPCOMING" color="black" />

        </div>
        <div className="flex items-center">
          <div className="ml-2">
            <Refresh fill={''} />
          </div>
          <div className="ml-2">
            <Filter fill={''} />
          </div>
          </div>
    </div>
      <div className="flex overflow-x-auto space-x-4">
        <UpcomingCourseCard />
        <UpcomingCourseCard />
        <UpcomingCourseCard />
        <UpcomingCourseCard />
        <UpcomingCourseCard />
      </div>
      </div>
    </div>
  );
}

export default Upcoming;
