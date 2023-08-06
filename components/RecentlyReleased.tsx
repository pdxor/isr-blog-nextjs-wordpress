import React from 'react';
import Filter from './icons/Filter';
import Refresh from './icons/Refresh';
import RecentlyReleasedCard from './RecentlyReleasedCard';
import SH2Text from './text/SH2Text';
import CourseCard from './CourseCard';
import RecommendedEducator from './RecomendedEducator';

function RecentlyReleased() {
  return (
    <div>
      <div>
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
      <SH2Text text="RECENTLY RELEASED" color="black" />

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
        {/* <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard /> */}
      </div>
      </div>
      <RecommendedEducator />
    </div>
  );
}

export default RecentlyReleased;
