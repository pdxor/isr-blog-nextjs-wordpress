import React from 'react';
import Image from 'next/legacy/image';

import SH2CardText from '../text/SH2CardText';
import HeartDash from '../icons/HeartDash';
import Rewatch from '../icons/Rewatch';

const NavDashRewatchCard = () => {
  return (
    <div className="">
      <div className="relative" style={{ width: 172, height: 101 }}>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <Image
            src="https://btcu2023react.wpengine.com/wp-content/uploads/2023/06/upcoming-5.png"
            alt="Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div style={{ position: 'absolute', right: '4px', bottom: '4px' }}>
          <Rewatch fill={'white'} />
        </div>
      </div>
      <div className="">
        <SH2CardText text="Class Title" color={''} />
        <SH2CardText text="Artist Title" color={''} />
      </div>
    </div>
  );
};

export default NavDashRewatchCard;




// to do: dynamically pull everything in.

