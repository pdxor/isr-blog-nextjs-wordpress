import React from 'react';
import UnAuthContent from '../UnAuthContent';
import B1Text from './B1Text';

const CourseSubInfo = () => {
  return (
    <UnAuthContent>
      <div className='pt-2 pb-4 pr-10 pl-10 justify-center text-center'>
        <B1Text text="Subscribe for $10/month (billed annually) for all classes and sessions" />
      </div>
    </UnAuthContent>
  );
};

export default CourseSubInfo;

