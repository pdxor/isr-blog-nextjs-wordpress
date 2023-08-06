import React from 'react';
import Image from 'next/image';
import T1Text from './text/T1Text';
import SH4Text from './text/SH4Text';

const RecommendedEducatorIconCard = () => {
  return (
    <div className="items-center p-2">
      <Image
        src="https://btcu2023react.wpengine.com/wp-content/uploads/2023/05/Ellipse-25.png"
        alt="Educator Image"
        width={72}
        height={72}
      />
      <div className="text-center">
        
        <SH4Text text="Briana Sanazzaro" />
        <T1Text text="@handle" />
      </div>
    </div>
  );
}

export default RecommendedEducatorIconCard;




// TO DO: dynamically pull in image, name and handle. also add a heart function here. 