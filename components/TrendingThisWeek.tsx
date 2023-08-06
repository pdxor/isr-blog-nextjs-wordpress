import React from 'react';
import SH2Text from './text/SH2Text';
import HorizontalCourseCard from './HorizontalCourseCard';

const TrendingThisWeek = () => {
  return (
    <div className="trending-container">
      <div className="justify-between flex items-center pt-2 pb-2">
        <SH2Text text="TRENDING THIS WEEK" color="black" />
      </div>
      <div className="course-card-container">
        <div className="pt-3 pb-3">
          <HorizontalCourseCard />
        </div>
        <div className="pt-3 pb-3">
          <HorizontalCourseCard />
        </div>
        <div className="pt-3 pb-3">
          <HorizontalCourseCard />
        </div>
      </div>
    </div>
  );
}

export default TrendingThisWeek;



