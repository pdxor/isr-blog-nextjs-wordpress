import React, { useState } from 'react';
import ProfileForm from './ProfileForm';
import SH2TextMont from './text/SH2TextMont';
import Lock from './icons/Lock';
import Edit from './icons/Edit';
import Close from './icons/Close';
import ResetPassword from './ResetPassword';
import Back from './icons/Back';

const MyInfo = () => {
  const [modalVisible, setModalVisible] = useState(true);

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      {modalVisible && (
        <div className="absolute top-0 left-0 w-full h-full pt-20 bg-black/25">
          <div className='flex w-full flex-col justify-center bg-white p-5'>
            <div className='flex flex-row justify-between'>
             
              <div className='' onClick={closeModal}>
                <Back fill={'black'} />
              </div>
            </div>
            <div className='flex flex-row'>
              <SH2TextMont text="My Info" />
              <Lock fill={''} />
              <span className='ml-auto'>
                <Edit fill={''} />
              </span>
            </div>
            <ProfileForm />
            <ResetPassword />
          </div>
        </div>
      )}
    </>
  );
}

export default MyInfo;
