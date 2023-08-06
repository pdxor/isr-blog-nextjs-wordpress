import React from 'react';
import Image from 'next/image';
import Filter from './icons/Filter';
import Refresh from './icons/Refresh';
import PlayVideo from './icons/PlayVideo';
import HeartOutline from './icons/HeartOutline';
import Share from './icons/Share';
import Plus from './icons/Plus';
import SecondarySmallButtonIconLeft from './buttons/SecondarySmallButtonIconLeft';
import Stars from './icons/Stars';
import SH2CardText from './text/SH2CardText';
import B2Text from './text/B2Text';

const RelatedCoursesCard = () => {
  return (
    <div className="pb-2">
      <div style={{ position: 'relative', width: '172px', height: '229px' }}>
        <Image
          src="https://btcu2023react.wpengine.com/wp-content/uploads/2023/05/width-172px-height-229px.png"
          alt="Image"
          width={172}
          height={229}
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
            fontFamily: 'Roboto',
            borderRadius: '4px',
          }}
        >
          90 minutes
        </div>
      </div>
      <div>
        <SecondarySmallButtonIconLeft
          link="/"
          text="PLAY"
          textColor="white"
          borderColor="white"
          backgroundColor="#C4A18D"
          icon={<PlayVideo fill={''} />}
        />
      </div>
      <SH2CardText text='Class Title' color={''}/>
      
      <SH2CardText text='Artist Title' color={''}/>

      <div className="flex">
        <Stars fill="#C4A18D" stroke="#C4A18D" width="18px" height="19px" />
        <Stars fill="#C4A18D" stroke="#C4A18D" width="18px" height="19px" />
        <Stars fill="#C4A18D" stroke="#C4A18D" width="18px" height="19px" />
        <Stars fill="#C4A18D" stroke="#C4A18D" width="18px" height="19px" />
        <Stars fill="white" stroke="black" width="18px" height="19px" />
      </div>
      <div className='flex'>
      <B2Text text='215'/>
      {/* to do: dynamically pull in # of reviews */}
      <B2Text text='&nbsp;reviews'/>
{/* to do: dynamically pull in # of reviews */}
</div>
    </div>
  );
}

export default RelatedCoursesCard;
