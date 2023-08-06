// to do: somehow make it so when you are on the particular page, make the button black and centered. 

import React from 'react';
import Link from 'next/link';
import SH4Text from './text/SH4Text';
import SearchComponent from './header/SearchComponent';

const CategoriesList = () => {
  return (
    <div className="flex flex-row justify-start items-center p-1 gap-2 overflow-x-auto overflow-hidden">

       {/* search function to: add this function in after launch.  */}

      <div className="w-12 h-12 bg-white border border-gray-300 rounded-md flex-none">
        <div className="flex flex-col items-center justify-center h-full cursor-pointer">
          <SearchComponent />
        </div>
      </div> 
{/* educator button */}
<Link href="/all-educators">
        <div className="w-32 h-12 bg-white border border-gray-300 rounded-md flex-none">
          <div className="flex flex-col items-center justify-center h-full cursor-pointer">
            <SH4Text text='EDUCATORS' />
          </div>
        </div>
      </Link>

      {/* social media button */}
      <Link href="/social-media">
        <div className="w-32 h-12 bg-white border border-gray-300 rounded-md flex-none">
          <div className="flex flex-col items-center justify-center h-full cursor-pointer">
            <SH4Text text='SOCIAL MEDIA' />
          </div>
        </div>
      </Link>
      {/* hair color button */}
      <Link href="/haircolor">
        <div className="w-32 h-12 bg-white border border-gray-300 rounded-md flex-none">
          <div className="flex flex-col items-center justify-center h-full cursor-pointer">
            <SH4Text text='HAIR COLOR' />
          </div>
        </div>
      </Link>

      {/* hair cutting button */}
      <Link href="/haircutting">
        <div className="w-32 h-12 bg-white border border-gray-300 rounded-md flex-none">
          <div className="flex flex-col items-center justify-center h-full cursor-pointer">
            <SH4Text text=' HAIRCUTTING' />
          </div>
        </div>
      </Link>
      {/* styling button */}
      <Link href="/styling">
        <div className="w-32 h-12 bg-white border border-gray-300 rounded-md flex-none">
          <div className="flex flex-col items-center justify-center h-full cursor-pointer">
            <SH4Text text='STYLING' />

          </div>
        </div>
      </Link>
      {/* texture  button */}
      <Link href="/texture">
        <div className="w-32 h-12 bg-white border border-gray-300 rounded-md flex-none">
          <div className="flex flex-col items-center justify-center h-full cursor-pointer">
            <SH4Text text='TEXTURE' />

          </div>
        </div>
      </Link>
      {/*  business button */}
      <Link href="/business">
        <div className="w-32 h-12 bg-white border border-gray-300 rounded-md flex-none">
          <div className="flex flex-col items-center justify-center h-full cursor-pointer">
            <SH4Text text='BUSINESS' />


          </div>
        </div>
      </Link>
      {/* mens  button */}
      <Link href="/mens">
        <div className="w-32 h-12 bg-white border border-gray-300 rounded-md flex-none">
          <div className="flex flex-col items-center justify-center h-full cursor-pointer">
            <SH4Text text=' MEN&apos;S' />


          </div>
        </div>
      </Link>
      {/* hairextensions  button */}
      <Link href="/hairextensions">
        <div className="w-32 h-12 bg-white border border-gray-300 rounded-md flex-none">
          <div className="flex flex-col items-center justify-center h-full cursor-pointer">
            <SH4Text text='HAIR EXTENSIONS' />


          </div>
        </div>
      </Link>
      {/*  events button */}
      <Link href="/events">
        <div className="w-32 h-12 bg-white border border-gray-300 rounded-md flex-none">
          <div className="flex flex-col items-center justify-center h-full cursor-pointer">
            <SH4Text text='BTC EVENTS' />

          </div>
        </div>
      </Link>
      {/*  masterclasses button */}
      <Link href="/masterclasses">
        <div className="w-32 h-12 bg-white border border-gray-300 rounded-md flex-none">
          <div className="flex flex-col items-center justify-center h-full cursor-pointer">
            <SH4Text text='   MASTER CLASSES ' />

          </div>
        </div>
      </Link>
      {/*  LANGUAGES button */}
      <Link href="/languages">
        <div className="w-32 h-12 bg-white border border-gray-300 rounded-md flex-none">
          <div className="flex flex-col items-center justify-center h-full cursor-pointer">
            <SH4Text text='LANGUAGES' />

          </div>
        </div>
      </Link>
      {/*  BULK SUBSCRIPTIONS button */}
      <Link href="/bulk-subscriptions">
        <div className="w-32 h-12 bg-white border border-gray-300 rounded-md flex-none">
          <div className="flex flex-col items-center justify-center h-full cursor-pointer">
            <SH4Text text='BULK SUBSCRIPTIONS' />

          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoriesList;
