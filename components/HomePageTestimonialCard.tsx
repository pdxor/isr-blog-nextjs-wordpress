import React from 'react';
import Stars from './icons/Stars';
import Account from './icons/Account';
import B1Text from './text/B1Text';

const HomePageTestimonialCard = () => {
  return (
    <div className="container mx-auto pr-5 pl-5 w-full">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center mb-4">
          <Account />
        </div>
        <div className="flex justify-center">
          <Stars fill="#C4A18D" stroke="#C4A18D" width="18px" height="19px" />
          <Stars fill="#C4A18D" stroke="#C4A18D" width="18px" height="19px" />
          <Stars fill="#C4A18D" stroke="#C4A18D" width="18px" height="19px" />
          <Stars fill="#C4A18D" stroke="#C4A18D" width="18px" height="19px" />
          <Stars fill="#C4A18D" stroke="#C4A18D" width="18px" height="19px" />
        </div>
      
          <B1Text text="Body text goes here...blah blah blah. btcu is so cool!" />
        
      </div>
    </div>
  );
};

export default HomePageTestimonialCard;






// TO DO: dynamically pull in image, body, and rating