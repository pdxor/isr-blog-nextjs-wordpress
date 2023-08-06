import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AuthContentNoPush from '../AuthContentNoPush';
import UnAuthContent from '../UnAuthContent';

function FullBTCULogo() {
  return (
    <React.Fragment>
      <AuthContentNoPush>
        <Link href="/">
          <Image
            className="h-8 object-contain flex items-start"
            src="https://btcu2023react.wpengine.com/wp-content/uploads/2023/03/ivvad9n4yjiv-btcu-800-2-1.png"
            alt="btcu Logo"
            width={800}
            height={800}
          />
        </Link>
      </AuthContentNoPush>
      <UnAuthContent>
        <Link href="/">
          <Image
            className="h-8 object-contain flex items-start"
            src="https://btcu2023react.wpengine.com/wp-content/uploads/2023/03/ivvad9n4yjiv-btcu-800-2-1.png"
            alt="btcu Logo"
            width={800}
            height={800}
          />
        </Link>
      </UnAuthContent>
    </React.Fragment>
  );
}

export default FullBTCULogo;
