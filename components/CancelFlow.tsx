"use client"
import React, { useState } from 'react';
import NavDashboard from './header/NavDashboard';
import CategoriesList from './CategoriesList';
import H1Text from './text/H1Text';
import SH1Text from './text/SH1Text';
import B1Text from './text/B1Text';
import CertificateForCancelFlow from './icons/CertificateForCancelFlow';
import SH2Text from './text/SH2Text';
import Back from './icons/Back';
import PrimaryHalfButton from './buttons/PrimaryHalfButton';
import PrimaryFullButton from './buttons/PrimaryFullButton';
import SH4Text from './text/SH4Text';
import SadFace from './icons/SadFace';
import CoursesIcon from './icons/CoursesIcon';
import ExclusiveDeals from './icons/ExclusiveDeals';

const NextButton = ({ handleNext, text }: { handleNext: () => void; text?: string }) => (
  <div
    className="flex justify-center items-center bg-white text-black font-bold py-2 px-4 rounded"
    style={{
      width: '192px',
      height: '60px',
      padding: '24px',
      alignItems: 'center',
      gap: '10px',
      flexShrink: 0,
      borderRadius: '8px',
      border: '2px solid black',
      cursor: 'pointer', // Add a cursor pointer to indicate it's clickable
    }}

    onClick={handleNext}
  >
    <SH4Text text={text || 'CANCEL'} />
  </div>
);

const BackButton = ({ handleBack, text }: { handleBack: () => void; text?: string }) => (
  <button onClick={handleBack}>
    {text || <Back fill={'black'} />}
  </button>
);

const CancelFlow = () => {
  const [section, setSection] = useState(1);

  const handleNext = () => {
    setSection(section + 1);
  };

  const handleBack = () => {
    setSection(section - 1);
  };

  return (
    <div className=''>
      <NavDashboard />
      <CategoriesList />
      <div className='p-4 justify-center'>
        {section === 1 && (
          <>
            <div className='flex justify-center p-2'>
              <SadFace />
            </div>
            <div className='flex-wrap justify-center text-center break-words p-2'>
              <H1Text text='Oh no! Thinking of cancelling your Premium subscription?' />
            </div>

            <div className='flex-wrap justify-center text-center break-words p-2'>
              <SH1Text text='Your membership isn’t set to renew until:' />
            </div>

            <div className='flex-wrap justify-center text-center break-words p-2'>
              <H1Text text='Date, 2023' />
            </div>
            <div className='flex-wrap justify-center text-center break-words p-2'>

              <B1Text text='Keep enjoying unlimited access and we can remind you 5 days before your renewal.' />
            </div>
            <div className='pt-2 pb-5'>
              <PrimaryHalfButton
                link="/profile"
                text="REMIND ME LATER"
                textColor="white"
                borderColor="#C4A18D"
                backgroundColor="#C4A18D"
              />
            </div>
            <div className='flex-wrap justify-center text-center break-words p-2'>

              <SH1Text text='If you cancel now you will lose all of your hard work!' />
            </div>
            <div className='flex'>
              <div className='flex-item p-2'>
                <CertificateForCancelFlow fill={'black'} />
                <div className='flex'>
                  <SH2Text text='11' color={''} />
                  <SH2Text text='&nbsp;CERTIFICATES' color={''} />
                </div>
              </div>
              <div className='flex-item p-2'>
                <CoursesIcon fill={'black'} />
                <SH2Text text='150+ COURSES' color={''} />
              </div>
            </div>
            <ExclusiveDeals />
            <SH2Text text='EXCLUSIVE DEALS' color={''} />

            <div className='flex-wrap justify-center text-center break-words p-2'>

              <B1Text text='If you are sure you want to go, please proceed to cancel.' />
            </div><div className='pt-4 pb-2'>
              <PrimaryHalfButton
                link="/profile"
                text="KEEP SUBSCRIPTION"
                textColor="white"
                borderColor="#C4A18D"
                backgroundColor="#C4A18D"
              />
            </div>
            <div className='flex flex-col items-center justify-center p-2'>

              <NextButton handleNext={handleNext} text={undefined} />
            </div>
            <B1Text text='Cancelling is effective immediately, however you will be able to reactivate at any time if your subscription date has not passed.' />

          </>
        )}

        {section === 2 && (
          <>
            <BackButton handleBack={handleBack} />
            <div className='flex-wrap justify-center text-center break-words p-2'>

              <H1Text text='Before you go...' />
            </div>
            <div className='flex-wrap break-words p-2'>

              <SH1Text text='We want to know why you are leaving, please select one:' />
            </div>
            <div>
            <div className='flex flex-row items-center p-1'>
  <input
    type='radio'
    name='reason'
    id='reason1'
    value='Reason 1'
  />
  <label htmlFor='reason1' className='flex items-center'>
    <SH2Text text=' &nbsp;I only wanted to try out BTCU.' color={'black'} />
  </label>
</div>




<div className='flex flex-row items-center pt-1'>        <input
          type='radio'
          name='reason'
          id='reason2'
          value='Reason 2'
        />
        <label htmlFor='reason2'><SH2Text text=' &nbsp;I did not find the content valuable.' color={'black'} /></label>
      </div>
      <div className='flex flex-row items-center pt-1'>        <input
          type='radio'
          name='reason'
          id='reason3'
          value='Reason 3'
        />
        <label htmlFor='reason4'><SH2Text text=' &nbsp;The price is over budget.' color={'black'} /></label>
      </div>
      <div className='flex flex-row items-center pt-1'>        <input
          type='radio'
          name='reason'
          id='reason4'
          value='Reason 4'
        />
        <label htmlFor='reason4'><SH2Text text=' &nbsp;I am frustrated using the site.' color={'black'} /></label>
      </div>
      <div className='flex flex-row items-center pt-1'> 
        <input
          type='radio'
          name='reason'
          id='reason5'
          value='Reason 5'
        />
        <label htmlFor='reason5'><SH2Text text=' &nbsp;I dont use BTCU enough.' color={'black'} /></label>
      </div>
      {/* Add more radio buttons and labels as needed */}
    </div>
            <div className='flex flex-col items-center justify-center'>
  <div className='p-2'>
    <NextButton handleNext={handleNext} text={undefined} />
  </div>
  <div className='p-2'>
    <NextButton handleNext={handleNext} text='I CHOOSE NOT TO ANSWER' />
  </div>
</div>

          </>
        )}

        {section === 3 && (
          <>
            <div className=''>

              <H1Text text='Canceled' />
              <div className='pt-3'>
                <SH1Text text='Your subscription has been cancelled.' />
              </div>
              {/* Additional content for the final section */}
              <div className='pt-3'>
                A confirmation email will be sent to you soon. You will not be auto-billed going forward. Please note that cancelling your subscription does not stop any purchases in process outside of the subscription.
              </div>
              <div className='pt-2'>
                We hope to see you back!
              </div>
              <div className='pt-5'>

                xx,
              </div>
              <div className='pt-2'>

                Mary and the BTCU Team
              </div>

            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CancelFlow;


// to do: the remind me later button should set up an email to remind the person
// to do: also these radio button cancel answers aren't actually being recorded anywhere...