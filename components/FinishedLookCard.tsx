import React from 'react';
import Image from 'next/image';
import { Course } from '@/interfaces';
interface CourseProps {
  course: Course;
}
const FinishedLookCard: React.FC<CourseProps> = ({ course }) => {
  if (!course) {
    return null;
  }
  const { title, courseMetadata, slug } = course;
  return (
    <div style={{ position: 'relative', flex: 'none', order: 0, flexGrow: 0 }}>
      <Image
         src={courseMetadata?.finishedlooks?.mediaItemUrl || "/placeholder.png"}
        alt="Image"
        width={148}
        height={148}
      />
    </div>
  );
}

export default FinishedLookCard;



{/* to do: fetch gallery from ACF Field */ }
