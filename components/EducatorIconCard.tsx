import React from 'react';
import Image from 'next/image';
import SH4Text from './text/SH4Text';
import T1Text from './text/T1Text';

const EducatorIconCard = () => {
  return (
    <div className="flex items-center">
      <div className="w-16 h-16 rounded-full overflow-hidden">
        <Image
          src="https://btcu2023react.wpengine.com/wp-content/uploads/2023/07/Mick-Lewis-300x300-1.jpg"
          alt="Educator Image"
          layout="fixed"
          width={66}
          height={66}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="ml-4">
        <SH4Text text="Artist Name" />
        <T1Text text="@handle" />
      </div>
    </div>
  );
}

export default EducatorIconCard;






// TO DO: dynamically pull in image, body, name and handle. also add a heart button here.