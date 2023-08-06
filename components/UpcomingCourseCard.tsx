import React from 'react';
import Image from 'next/image';
import Filter from './icons/Filter';
import Refresh from './icons/Refresh';
import PlayVideo from './icons/PlayVideo';
import HeartOutline from './icons/HeartOutline';
import Share from './icons/Share';
import Plus from './icons/Plus';
import B2Text from './text/B2Text';
import SH2CardText from './text/SH2CardText';
import SaveYourSpotIconLeft from './buttons/SaveYourSpotIconLeft';
import SH4Text from './text/SH4Text';
import B1Text from './text/B1Text';
 
const UpcomingCourseCard = () => {
  return (
    <div className="bg-[#F8F4F2] bg-opacity-100 rounded-xl" style={{ maxWidth: '260px' }}>
      <div style={{ position: 'relative', width: '260px', height: '347px' }}>
        <Image
          src="https://btcu2023react.wpengine.com/wp-content/uploads/2023/06/Frame-161-1.jpg"
          alt="Image"
          width={260}
          height={347}
          style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}
        />
        <div
          style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '4px 8px',
            color: 'white',
            borderRadius: '5px'
          }}
        >
          <SH4Text text="90 minutes" />
        </div>
      </div>
      <div className="">
        <div className="pt-2 pl-2">
          {/* TO DO: CHANGE THIS BUTTON */}
          <SaveYourSpotIconLeft
            link="/"
            text="SAVE YOUR SPOT"
            textColor="white"
            borderColor="white"
            backgroundColor="#C4A18D"
            // icon={<PlayVideo />}
          />
          {/* to do : the "play & playvideo icon should change to rewatch and rewatch icon once a customer has watched the video" */}
        </div>
        <div className="p-2">
          <div className="">
            <SH2CardText text="Class Title" color={''} />
          </div>
          <div className="">
            <SH2CardText text="Artist Title" color={''} />
          </div>
          <B1Text text="A short sentence here explaining what the video is about. This copy extends the length of the card automatically so it may be longer than the one next to it and push everything down." />
        </div>
      </div>
    </div>
  );
};

export default UpcomingCourseCard;



     {/* TO DO: CHANGE THE SAVE YOUR SPOT BUTTON, right now it just goes to / link */}
    {/* to do: dynamically pull in # of reviews */}