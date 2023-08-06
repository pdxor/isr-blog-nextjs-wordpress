import React from 'react';
import Image from 'next/image';
import { Course } from '@/interfaces';
import Link from 'next/link';
import SecondarySmallButtonIconLeft from './buttons/SecondarySmallButtonIconLeft';
import Stars from './icons/Stars';
import SH2Text from './text/SH2Text';
import SH2CardText from './text/SH2CardText';
import B2Text from './text/B2Text';
import SH4Text from './text/SH4Text';
import PlayVideo from './icons/PlayVideo';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  if (!course) {
    return null;
  }
  const { title, courseMetadata, slug } = course;
  return (
    <div className="bg-[#F8F4F2] bg-opacity-100 rounded-lg" style={{ width: '172px' }}>
      <Link href={`/courses/${slug}`}>
        <div style={{ position: 'relative', width: '172px',  }}>
          {/* to do: wistiapromodetailimag was here we need a replacement */}
          <Image src="/vertical-placeholder.png" alt="Course Image" width={172} height={229} />
          <div
            style={{
              position: 'absolute',
              top: '4px',
              right: '8px',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              padding: '4px 8px',
              color: 'white',
              borderRadius: '4px', // Rounded corners with a 4px radius
            }}
          >
            <SH4Text text="90 minutes" />
          </div>
        </div>
        <div className="">
          <div className="p-2 pt-2">
            <SecondarySmallButtonIconLeft
              link="/"
              text="PLAY"
              textColor="white"
              borderColor="white"
              backgroundColor="#C4A18D"
              icon={<PlayVideo fill={'white'} />}
            />
            {/* to do : the "play & playvideo icon should change to rewatch and rewatch icon once a customer has watched the video" */}
          </div>
          <div className="pt-1 pl-2 pr-2 lb-2">
            <SH2CardText text={title} color={''} />
            <SH2CardText text={courseMetadata?.maineducatorinstahandl} color={''} />
            <div className="flex ">
              <Stars fill="#C4A18D" stroke="#C4A18D" width="18px" height="19px" />
              <Stars fill="#C4A18D" stroke="#C4A18D" width="18px" height="19px" />
              <Stars fill="#C4A18D" stroke="#C4A18D" width="18px" height="19px" />
              <Stars fill="#C4A18D" stroke="#C4A18D" width="18px" height="19px" />
              <Stars fill="white" stroke="white" width="18px" height="19px" />
            </div>
            <B2Text text="215 reviews" />
          </div>
          
        </div>
    
      </Link>
    </div>
  );
};

export default CourseCard;
    {/* to do: dynamically pull in # of reviews, also to do: fix so the height is somehow not fixed. just because 1 coursecard has a long title, it shouldn't make the rest super long.  */}
