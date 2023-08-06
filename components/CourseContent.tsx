import React from 'react';
import Image from 'next/image';
import Chapters from './Chapters';
import ProductsUsed from './ProductsUsed';
import Formulas from './icons/Formulas';
import CourseFormulas from './CourseFormulas';
import CourseContentVideo from './CourseContentVideo';
import B1Text from './text/B1Text';
import SH2Text from './text/SH2Text';
import HeadSheet from './icons/HeadSheet';
import SecondaryHalfButtonIconLeft from './buttons/SecondaryHalfButtonIconLeft';
import Notes from './icons/Notes';
import VideoCard from './VideoCard';

const CourseContent = () => {
  return (
    <div className=''>
      <div className=' bg-black w-screen p-1'>
        <VideoCard />
      </div>
      <div className='flex justify-center pt-2 pb-1'>
        <div className='p-2'>
          <SecondaryHalfButtonIconLeft
            link="/"
            text="Headsheet"
            textColor="black"
            borderColor="black"
            backgroundColor="white"
            icon={<HeadSheet fill={''} />}
          />
          {/* fix this link, also if there is no headsheet, this button should disapear and take ntoes should be centered */}
        </div>
        <div className='p-2'>

          <SecondaryHalfButtonIconLeft
            link="/"
            text="Take Notes"
            textColor="black"
            borderColor="black"
            backgroundColor="white"
            icon={<Notes fill={''} />}
          />
          {/* fix this link */}
        </div>
      </div>
      <Chapters />
      <ProductsUsed />
      <CourseFormulas />
    </div>
  );
};

export default CourseContent;






// to do: so many dynamically pully thingies to do, do ya thing ACF