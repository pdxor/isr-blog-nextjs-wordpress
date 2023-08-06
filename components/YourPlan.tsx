import React, { useState } from 'react';
import SH2TextMont from './text/SH2TextMont';
import Close from './icons/Close';
import Back from './icons/Back';
import SubTiers from './SubTiers';
import H1Text from './text/H1Text';
import B1Text from './text/B1Text';
import PrimaryHalfButton from './buttons/PrimaryHalfButton';
import SH2Text from './text/SH2Text';

const YourPlan = () => {
  const [showYourPlan, setShowYourPlan] = useState(true);
  const [dropdownEnabled, setDropdownEnabled] = useState(false); // State to track if the dropdown is enabled

  const handleCloseClick = () => {
    setShowYourPlan(false);
  };

  const handlePlanChangeClick = () => {
    setDropdownEnabled(true); // Enable the dropdown when "Change Plan" is clicked
  };

  return (
    <>
      {showYourPlan && (
        <div className="fixed top-0 left-0 w-full h-full pt-20 bg-black/25">
          <div className='flex w-full flex-col justify-center bg-white p-5'>
            <div className='flex flex-row justify-between'>
              <button onClick={handleCloseClick}>
                <Back fill={'black'} />
              </button>
            </div>
            <div className='flex flex-col mb-5'>
              <H1Text text="Your Plan" />
            </div>
            <div className='flex flex-col mb-6'>
              <B1Text text="Member since" />
              <B1Text text="June 2023" />
            </div>
            <div className='flex flex-col mb-5'>
              <B1Text text="Basic Plan" />
              <B1Text text="14.99/mo" />
            </div>
            <div className='flex flex-col mb-6'>
              <B1Text text="Next Billing Date" />
              <B1Text text="July 14, 2023" />
            </div>
            <div className='flex flex-col mb-9'>
              <B1Text text="Subscription fees are billed on the same date each month and may take a few days after the billing date to process." />
            </div>
            <div className='yourplan-changeplan'>
              <div className='flex items-center'>
                <input
                  id="change-plan"
                  className=""
                  type="radio"
                  name="changePlan"
                />
                <label htmlFor="change-plan" className={`cursor-pointer ${dropdownEnabled ? 'text-black' : 'text-black/50'}`} onClick={handlePlanChangeClick}>
                  <SH2Text text='&nbsp;Change Plan' color={''} />
                </label>
              </div>
              {/* Change Plan Dropdown */}
              <div className={`relative ${dropdownEnabled ? 'h-14' : 'h-14'} p-2.5 border-solid border border-black font-sans text-sm ${dropdownEnabled ? 'bg-white' : 'bg-pressedGrey'} text-black focus:text-black cursor-pointer`}>
                <select className="w-full h-full bg-transparent outline-none" disabled={!dropdownEnabled}>
                  <option value="" disabled>Choose a plan</option>
                  <option value="annual">Annual Plan - $120/year</option>
                  <option value="biannual">Bi-Annual Plan - $200/2 years</option>
                  <option value="free">Free Plan - $0/mo</option>
                </select>
              </div>
            </div>
<div className='pt-5 pb-3'>
            <div className='flex flex-col'>
              <PrimaryHalfButton
                link=''
                text='UPDATE'
              />
              </div>
              <div className='pt-5 pb-3'>
              <PrimaryHalfButton
                link='/cancel'
                text='CANCEL PLAN'
              />
          </div>
           </div>
          </div>
        </div>
      )}
    </>
  );
}

export default YourPlan;





// to do: bring in users real info here
      {/* <SubTiers setSelectedPlan={function (value: React.SetStateAction<string | null>): void {
              throw new Error('Function not implemented.');
            }} /> */}