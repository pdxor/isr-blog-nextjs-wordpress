import React from 'react';
import { useState } from 'react';
import ProfileForm from './ProfileForm';
import SH2TextMont from './text/SH2TextMont';
import Lock from './icons/Lock';
import Edit from './icons/Edit';
import Close from './icons/Close';
import ResetPassword from './ResetPassword';
import Back from './icons/Back';

const MyPayment = () => {
  const [showMyPayment, setShowMyPayment] = useState(true);

  const handleCloseClick = () => {
    setShowMyPayment(false);
  };

  return (
    <>
      {showMyPayment && (
        <div className="fixed top-0 left-0 w-full h-full pt-20 bg-black/25 overflow-y-auto">
          <div className='flex w-full flex-col justify-center bg-white p-5'>
            <div className='flex flex-row justify-between'>
              <button onClick={handleCloseClick}>
                <Back fill={'black'} />
              </button>
            </div>
       payment, yeehaw
           
          </div>
        </div>
      )}
    </>
  );
}

export default MyPayment;
