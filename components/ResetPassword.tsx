import React from 'react';
import PrimaryHalfButton from './buttons/PrimaryHalfButton';

const ResetPassword = () => {
  return (
    <div className='flex w-full flex-col justify-center'>
      {/* <p>Enter your current password to continue.</p> */}
      <form method="post" className='flex w-full flex-col'>
        <fieldset className='flex w-full flex-col justify-center'>
          <label htmlFor="profile-current-password" className='invisible'>Current Password</label>
          <input
            id="profile-current-password"
            type="password"
            name="currentPassword"
            defaultValue=''
            autoComplete=""
            placeholder='Curent Password'
            className='appearance-none h-14 p-2.5 border-solid border border-black font-sans text-sm bg-pressedGrey placeholder:text-black/50'
          />
          <label htmlFor="profile-new-password" className='invisible'>New Password</label>
          <input
            id="profile-new-password"
            type="password"
            name="newPassword"
            defaultValue=''
            autoComplete=""
            placeholder='New Password'
            className='appearance-none h-14 p-2.5 border-solid border border-black font-sans text-sm bg-pressedGrey placeholder:text-black/50'
          />
          <label htmlFor="profile-new-password-confirm" className='invisible'>Current Password Confirm</label>
          <input
            id="profile-new-password-confirm"
            type="password"
            name="currentPasswordConfirm"
            defaultValue=''
            autoComplete=""
            placeholder='Curent Password Confirm'
            className='appearance-none h-14 p-2.5 border-solid border border-black font-sans text-sm bg-pressedGrey placeholder:text-black/50'
          />

          <p className="error-message flex justify-center text-red">Error Message</p>

          <div className='flex justify-center'>
            <PrimaryHalfButton
              link="#"
              text="SUBMIT"
              textColor="white"
              borderColor="black"
              backgroundColor="black"
              padding="24px"
              width="100%"
              maxWidth="192px"
              type="submit"
              disabled=''
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default ResetPassword;