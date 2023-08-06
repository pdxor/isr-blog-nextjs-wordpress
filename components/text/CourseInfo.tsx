import React from 'react';
import SH2Text from './SH2Text';
import SH4Text from './SH4Text';
import B2Text from './B2Text';


const CourseInfo = () => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

 return (

    <div>
      <div className="flex items-center pt-1 pb-1">
        <SH2Text text="COURSE DETAILS" color="black" />
      </div>


      <div className='' style={containerStyle}>
      <B2Text text="Course Length:" />
        <SH4Text text="&nbsp;90 minutes" />


      </div>
      <div className='' style={containerStyle}>
        <B2Text text="Category:" />


        <SH4Text text="&nbsp;HAIR CUTTING" />

      </div>
      <div className='' style={containerStyle}>
        <B2Text text="Series:" />

        <SH4Text text="&nbsp;7 Part" />

      </div>
      <div className='' style={containerStyle}>
        <B2Text text="Level:" />

        <SH4Text text="&nbsp;BEGINNER" />

      </div>
    </div>
  );
};

export default CourseInfo;






// to do: dynamically pull in the duration, category, series & level