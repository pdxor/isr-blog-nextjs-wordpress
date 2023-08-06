import React from 'react';
import Image from 'next/image';
import SH4Text from './text/SH4Text';
import B1Text from './text/B1Text';
import HeartOutline from './icons/HeartOutline';

const AboutTheEducatorCard = () => {
  return (
    <div className="flex items-center pr-4 pl-4">
      <div className="relative w-66 h-66 mr-4">
        <div className="rounded-full overflow-hidden w-66 h-66">
          <Image
            src="https://btcu2023react.wpengine.com/wp-content/uploads/2023/07/Linson-Jamison-300x300-1.jpg"
            alt="Educator Image"
            width={66}
            height={66}
          />
        </div>
        {/* <div className="absolute bottom-0 right-0">
          <HeartOutline fill={''} />
        </div> */}
        <div className="items-center justify-center">
          <SH4Text text="Mary Rector" />
        </div>
      </div>
      <div>
        <B1Text text="Super short generic bio goes here. super short generic bio goes here. here here here words.  " />
      </div>
    </div>
  );
}

export default AboutTheEducatorCard;









{/* to do: fetch images, bio and name from ACF Field. also add the heart, it wasn't working for me */ }
