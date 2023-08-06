"use client"
import React, { useState } from 'react';
import CourseContent from '../CourseContent';
import SH4Text from '../text/SH4Text';
import Header from '../Header';
import Back from '../icons/Back';
import Close from '../icons/Close';
import PlayVideo from '../icons/PlayVideo';

const PlayButton: React.FC = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOverlayOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling on the body when overlay is open
  };

  const handleCloseClick = () => {
    setIsOverlayOpen(false);
    document.body.style.overflow = ''; // Restore default scrolling on the body when overlay is closed
  };

  return (
    <>
        
  <button onClick={handleButtonClick} style={{
          display: 'flex',
          width: '192px',
          height: '60px',
          padding: '24px',
          alignItems: 'center',
          gap: '10px',
          flexShrink: 0,
          borderRadius: '8px',
          border: '2px solid #C3A08D',
          background: '#C3A08D',
          color: 'white',
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: '900',
          fontSize: '12px',
          lineHeight: '14px',
          textDecoration: 'none', // Remove default underline for button text
          cursor: 'pointer', // Add pointer cursor on hover
        }}
      >
    <div className='flex justify-center' style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
  <PlayVideo fill={'white'} />
  <SH4Text text="PLAY" />
</div>

      </button>
 
      {isOverlayOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start', // Adjusted justifyContent to align with the top
            alignItems: 'center',
            backgroundColor: 'white',
            zIndex: 9999,
            overflow: 'auto',
          }}
        >
         
       
          <Header />
          <div className='bg-black h-screen w-screen'>
  <div className='flex justify-start'>
    <button
      onClick={handleCloseClick}
      className='relative top-1 left-1 z-50'
    >
      <Back fill='white' />
    </button>
  </div>
</div>

          <CourseContent />
        </div>
      )}
    </>
  );
};

export default PlayButton;





// to do: need to do the styling for this button