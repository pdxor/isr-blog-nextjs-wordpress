import React from 'react';
import CourseFormulasCard from './CourseFormulasCard';
import SH2Text from './text/SH2Text';

const CourseFormulas = () => {
  return (
    <div className="pb-4">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
          <SH2Text text="FORMULAS" color="black" />

          </div>
         
        </div>
        <div className="flex overflow-x-auto space-x-4">
          <CourseFormulasCard />
       
       
        </div>
      </div>
    </div>
  );
}

export default CourseFormulas;




