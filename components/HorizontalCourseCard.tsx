import React from 'react';
import Image from 'next/image';
import PlayVideo from './icons/PlayVideo';
import SecondarySmallButtonIconLeft from './buttons/SecondarySmallButtonIconLeft';
import Stars from './icons/Stars';
import SH4Text from './text/SH4Text';
import SH2Text from './text/SH2Text';
import B1Text from './text/B1Text';
import SH2CardText from './text/SH2CardText';

const HorizontalCourseCard = () => {
  return (
    <div className="flex items-center">

      <div style={{ position: 'relative', width: '124px', height: '165px' }}>
        <Image
          src="https://btcu2023react.wpengine.com/wp-content/uploads/2023/06/Frame-161.jpg"
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
            borderRadius: '4px',
          }}
        >
          <SH4Text text='1 hr.' />

        </div>
      </div>
      <div>

        <div className='p-2 pl-'>
          <div className="flex flex-col justify-end pb-2">
            <SecondarySmallButtonIconLeft
              link="/"
              text="PLAY"
              textColor="white"
              borderColor="white"
              backgroundColor="#C4A18D"
              icon={<PlayVideo fill={'white'} />}
            />
          </div>
          <SH2CardText text='Class Title' color={''} />
          <SH2CardText text='Artist Title' color={''} />

          <div className="flex">
            <Stars fill="#C4A18D" stroke="#C4A18D" width="18px" height="19px" />
            <Stars fill="#C4A18D" stroke="#C4A18D" width="18px" height="19px" />
            <Stars fill="#C4A18D" stroke="#C4A18D" width="18px" height="19px" />
            <Stars fill="#C4A18D" stroke="#C4A18D" width="18px" height="19px" />
            <Stars fill="white" stroke="white" width="18px" height="19px" />
          </div>
          {/* to do: dynamically pull in # of reviews */}
          <div className='flex'>


            <B1Text text=' 215 ' />
            <B1Text text='&nbsp;Reviews' />
          </div>
        </div>
        {/* to do: dynamically pull in # of reviews */}
      </div>
    </div>
  );
}

export default HorizontalCourseCard;
