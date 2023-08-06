import React from 'react';
import Link from "next/link";
import SH4Text from '../text/SH4Text';
// this button is used on a course page to go from trailer to actual content
interface StartCourseButtonProps {
  onClick: () => void;
  text: string;
  link: string;
}

const StartCourseButton: React.FC<StartCourseButtonProps> = ({ onClick, text, link }) => {
  return (
    <Link href={link}
        onClick={onClick}
        style={{
          backgroundColor: '#f2f2f2',
          color: 'red',
          padding: '8px 32px',
          borderRadius: '6px',
          border: '1px solid red',
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
                  <SH4Text text={text}/>

    </Link>
  );
};

export default StartCourseButton;


{/* TO DO: move this button to whereever it belongs & update links */}
{/* <div>
<StartCourseButton
  onClick={handleSubscribe}
  text="Start Course"
  link="#"
/>
</div> */}