// import B1Text from './text/B1Text'; cannot use b1 text because it won't work with the read more function
"use client"
import React, { useState } from 'react';
import SH2Text from './text/SH2Text';
import SH4Text from './text/SH4Text';
import Stars from './icons/Stars';
import B1Text from './text/B1Text';

const AboutTheEducatorLongBio = () => {
  const text = `Chris Appleton (@chrisappleton1) is the most sought-after hairstylist to some of the biggest names in Hollywood including: Kim Kardashian, Jennifer Lopez, Ariana Grande, and Drew Barrymore. Known to his 3.5 MILLION IG followers for setting the trends in celebrity hairstyling, Chris also shares his styling tips with quick styling tutorials. Named a “Hair Star” by Vogue UK, Appleton's work has been showcased on covers and major features for the top-tier magazines across the globe, including Vogue, Harper’s Bazaar, Vanity Fair, Marie Claire, Grazia, L’Officiel Paris, and Singapore. His talent has been enlisted by some of the largest and most iconic fashion houses for their seasonal shows, including Chanel, Vivienne Westwood, Fendi, Moschino, Dolce & Gabbana, Valentino, Saint Laurent, Tom Ford, and Burberry.`;

  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="pb-4">
      <div className="pt-4 pb-4">
        <SH2Text text="ABOUT THE EDUCATOR" color="black" />
      </div>
      <div className="flex pb-3">
        <SH4Text text="RATING" />
        <div className="flex p-1">
          <Stars fill="black" stroke="black" width="19" height="" />
          <Stars fill="black" stroke="black" width="19" height="" />
          <Stars fill="black" stroke="black" width="19" height="" />
          <Stars fill="black" stroke="black" width="19" height="" />
          <Stars fill="black" stroke="black" width="19" height="" />
        </div>
      </div>
      <div className={`overflow-hidden leading-relaxed ${expanded ? 'max-h-[none]' : 'max-h-[6em]'}`}>
        <div
          className={`${
            expanded ? 'text-black' : 'bg-gradient-to-b from-black to-gray-200 text-transparent bg-clip-text'
          } transition-colors duration-300 font-roboto text-base font-normal leading-6 tracking-tighter`}
          style={{
            background: expanded ? 'none' : 'linear-gradient(to bottom, black, #f2f2f2)',
            WebkitBackgroundClip: expanded ? 'initial' : 'text',
            WebkitTextFillColor: expanded ? 'initial' : 'transparent',
          }}
        >
          {text}
        </div>
      </div>
      {!expanded && (
        <button
          onClick={toggleExpansion}
          className="w-full py-1 mt-2 border-0 bg-transparent text-gray-200 flex items-center justify-center"
        >
          <span className="w-1/3 border-dashed border-t border-gray-200 mr-2"></span>
          <B1Text text="Read More" />
          <span className="w-1/3 border-dashed border-t border-gray-200 ml-2"></span>
        </button>
      )}
    </div>
  );
};

export default AboutTheEducatorLongBio;









// to do: dynamically pull in you educator bio's
// ALSO, for some reason the gradient is not working on mobile screens, just desktop. and the text is not styled correctly. 