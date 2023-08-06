import React from 'react';
import SH2Text from './text/SH2Text';
import B1Text from './text/B1Text';
import T1Text from './text/T1Text';

const Chapters = () => {
  // Example data for time and description, to do: dynamically pull in real data from wistia
  const chaptersData = [
    { time: '5:16', description: 'Sizing the Cut' },
    { time: '8:42', description: 'Texturizing Techniques' },
    { time: '12:15', description: 'Finishing Touches' },
  ];

  return (
    <div>
      <div>
        <div className="flex flex-col items-start mb-4">
          <div className="flex items-center">
            <SH2Text text="CHAPTERS" color="black" />

          </div>
          {chaptersData.map((chapter, index) => (
            <div className="flex items-center mt-2" key={index}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '4px 8px',
                  gap: '10px',
                  width: '45px',
                  height: '15px',
                  background: '#333333',
                  opacity: '0.5',
                  borderRadius: '4px',

                }}
              >

                <div style={{ color: 'white' }}>
                  <T1Text text={chapter.time} />
                </div>


              </div>
              <div className='pl-2'>
                <B1Text text={chapter.description} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chapters;
