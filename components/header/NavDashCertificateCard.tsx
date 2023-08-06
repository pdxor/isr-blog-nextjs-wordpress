import React, { useState } from 'react';
import SH2CardText from '../text/SH2CardText';
import Image from 'next/image';
import Certificate from '../icons/Certificate';

function NavDashCertificateCard() {
  return (
  
      <div className="">
        <div className="relative" style={{ width: 142, height: 107 }}>
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image
              src="https://btcu2023react.wpengine.com/wp-content/uploads/2023/07/upcoming-4.png"
              alt="Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div style={{ position: 'absolute', right: '14px', bottom: '14px' }}>
            <Certificate />
          </div> 
        </div>
        <div className="">
          <SH2CardText text="Class Title" color={''} />
          <SH2CardText text="Artist Title" color={''} />
        </div>
      
  
      </div>
    );
  };



export default NavDashCertificateCard;




