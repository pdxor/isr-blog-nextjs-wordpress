import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CourseSubCallOut = () => {
  return (
    <div>
<div className="mobile-image">
  <Link href="/subscribe">
  <Image
        src="https://btcu2023react.wpengine.com/wp-content/uploads/2023/05/I-am-an-example-interchangable-subscription-callout.-I-only-appear-when-a-user-is-not-signed-upsigned-in..png"
        alt="Image"
        width={1000}
        height={500}
        style={{ width: '100%', height: '100%' }}
      />
  </Link>
</div>

<div className="desktop-image">
  <Link href="/subscribe">
    <Image
      src="https://btcu2023react.wpengine.com/wp-content/uploads/2023/07/Rustic-Minimal-Wedding-Print-Banner.png"
      alt="Image"
      width={10000}
      height={10000}
      style={{ width: '100%', height: '100%' }}
    />
  </Link>
</div>


      {/* <div className="relative w-full h-full">
       <Image
         src="https://btcu2023react.wpengine.com/wp-content/uploads/2023/07/Rustic-Minimal-Wedding-Print-Banner.png"
         alt="Image"
         className="object-cover w-full h-full"
                />
     </div> */}
    </div>
  );
};

export default CourseSubCallOut;




// to do: figure out how to change the auth for different sub SubTiers.  also need a place in wordpress where editors can easily switch out the desktop & mobile creative. 


