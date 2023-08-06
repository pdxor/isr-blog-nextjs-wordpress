import React from 'react';
import SH2Text from './text/SH2Text';
import Filter from './icons/Filter';
import Refresh from './icons/Refresh';
import RelatedCoursesCard from './RelatedCoursesCard';

function RelatedCourses() {
  return (
    <div>
      <div>
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
      <SH2Text text="RELATED COURSES" color="black" />
        </div>
        
    </div>
      <div className="flex overflow-x-auto space-x-4">
        <RelatedCoursesCard />
        <RelatedCoursesCard />
        <RelatedCoursesCard />
        <RelatedCoursesCard />
      </div>
      </div>
    </div>
  );
}

export default RelatedCourses;