import React from 'react';
import TestimonialsCard from './TestimonialsCard';
import SH2Text from './text/SH2Text';

const Testimonials = () => {
  return (
    <div>
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
          <SH2Text text="TESTIMONIALS" color="black" />

          </div>
        </div>
        <div className="max-h-[300px] overflow-y-auto">
          <div className="grid grid-cols-1 gap-4">
            <TestimonialsCard />
            <TestimonialsCard />
            <TestimonialsCard />
            <TestimonialsCard />
            <TestimonialsCard />
            <TestimonialsCard />
            <TestimonialsCard />
            <TestimonialsCard />
            <TestimonialsCard />
            <TestimonialsCard />
            <TestimonialsCard />
            <TestimonialsCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;




// TO DO: everything