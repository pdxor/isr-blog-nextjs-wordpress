import React from 'react';
import Stars from './icons/Stars';
import Account from './icons/Account';
import B1Text from './text/B1Text';

const TestimonialsCard = () => {
  return (
    <div className="container mx-auto pr-5 pl-5">
      <div className="flex">
        <div className="mr-4 flex items-center justify-center">
          <Account />
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <Stars fill="#C4A18D" stroke="#C4A18D" width="18px" height="19px" />
            <Stars fill="#C4A18D" stroke="#C4A18D" width="18px" height="19px" />
            <Stars fill="#C4A18D" stroke="#C4A18D" width="18px" height="19px" />
            <Stars fill="#C4A18D" stroke="#C4A18D" width="18px" height="19px" />
            <Stars fill="white" stroke="white" width="18px" height="19px" />
          </div>
          <div>
            <B1Text text="Body text goes here, will expand down if longer, but width is auto." />
          </div>
          <div className="flex items-center mt-2">
            <div className="mr-2">
              <B1Text text="Name" />
            </div>
            <div className="text-gray-400">|</div>
            <div className="ml-2">
              <B1Text text="Date" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsCard;






// TO DO: dynamically pull in image, body, name and date