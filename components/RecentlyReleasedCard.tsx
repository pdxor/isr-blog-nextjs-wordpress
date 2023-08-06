import React from 'react';
import Image from 'next/image';
import HeartOutline from './icons/HeartOutline';
import PlayVideo from './icons/PlayVideo';
import Plus from './icons/Plus';
import Share from './icons/Share';
 
function RecentlyReleasedCard() {
  return (
    <div className="container">
      <div style={{ position: 'relative', width: '172px', height: '97px' }}>
        <Image
          src="https://btcu2023react.wpengine.com/wp-content/uploads/2023/05/Aspect_ratio_-_16x9.svg_.png"
          alt="Image"
width={172}
height={97}
        />
        <div
          style={{
            position: 'absolute',
            top: '4px',
            right: '8px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '4px 8px',
            color: 'white',
            fontSize: '12px',
            fontWeight: '900',
            lineHeight: '14.06px',
            font: 'roboto',
            borderRadius: '4px',
          }}
        >
          {/* to do: dynamically pull in the duration here */}
         90 minutes
        </div>
      </div>

      {/* icons */}
      <div className="flex justify-center">
        <div className="w-1/4">
          <PlayVideo fill={''} />
        </div>
        <div className="w-1/4">
          <Plus fill={''} width={''} height={''}/>
        </div>
        <div className="w-1/4">
          <HeartOutline fill={''} />
        </div>
        <div className="w-1/4">
          <Share />
        </div>
      </div>

      <div className="text-12 font-roboto font-semibold leading-14.06">
        Class Title
      </div>
      <div className="text-12 font-roboto font-semibold leading-14.06">
        Artist Title
      </div>
    </div>
  );
}

export default RecentlyReleasedCard;
