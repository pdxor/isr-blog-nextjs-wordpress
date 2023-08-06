import React from 'react';
import Image from 'next/image';
import CourseContentVideo from './CourseContentVideo';
import B1TextWhite from './text/B1TextWhite';
import SH2Text from './text/SH2Text';
import RightArrow from './icons/RightArrow';
import RightChevron from './icons/RightChevron';
import YouWillLearn from './YouWillLearn';
import BackDirection from './icons/BackDirection';
import Back from './icons/Back';

const VideoCard = () => {
  const b1TextStyle = {
    color: 'white !important',
  };

  return (
    <div className='bg-black text-white'>
      {/* <div className='p-3'>
        <Back fill={'white'} />
      </div> */}
      <CourseContentVideo embedCode={""} />
      <div className='flex text-white!important'>

<button>
<B1TextWhite text='Previous Chapter' />

  </button>        
        {/* to do: this previous chapter should only show up if there is a previous chapter and not on the first chapter.  */}
        <div className="justify-end">
  <button className="bg-[#C4A18D] text-white flex">
    <B1TextWhite text='Next Chapter' />
    <RightChevron fill={'white'} />

  </button>
</div>
        {/* // to do: the next button should change to "finish" once the user is on the last section.  */}


      </div>
      <div className='bg-[#333333] text-white p-1'>

        {/* to do: when this is expanded, it shows the what you will learn stuff */}

        <div className='flex'>
          <SH2Text text='Class Title' color={''} />
          <span className='text-gray-500 mx-2'>&nbsp;/&nbsp;</span>
          <SH2Text text='Section Title' color={''} />
          <RightChevron fill={'white'} />
        </div>
        <SH2Text text='Educator Name' color={''} />
        <YouWillLearn />
      </div>
    </div>

  );
};

export default VideoCard;

