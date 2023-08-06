import React from 'react';
import H1Text from './text/H1Text';
import Image from 'next/image';
import StudentsAreViewing from './StudentsAreViewing';
import SH2Text from './text/SH2Text';
import Refresh from './icons/Refresh';
import EducatorIconCard from './EducatorIconCard';
import RecommendedEducatorIconCard from './RecommendedEducatorIconCard';
import RecommendedEducator from './RecomendedEducator';
import Link from 'next/link';
import CourseSubCallOut from './CourseSubCallOut';
import SH1Text from './text/SH1Text';
import PrimaryHalfButton from './buttons/PrimaryHalfButton';
import HomePageTestimonialCard from './HomePageTestimonialCard';

function HomePageNotSignedIn() {

  return (
    <div>
      There will be 3 total homepages (dependant on who is viewing). The above example buttons will not be on the home page, they are only there for quick viewing access for now). 
      <br />
      <div className='text-red'>
      Below is the home page, for those who are not signed in (i.e. the subscribe page)
        </div>      

      <Image
        src={"https://btcu2023react.wpengine.com/wp-content/uploads/2023/06/k0m94inhxwxr-homepaeg-membership3.png" || "/public/placeholder.png"}
        alt="Image"
        width={1600}
        height={1600}
      />
      <br />

      <PrimaryHalfButton
        link="/sign-up"
        text="Become A Member"
        textColor="white"
        borderColor="#C4A18D"
        backgroundColor="#C4A18D"
      />

      <br />

      <PrimaryHalfButton
        link="/sign-in"
        text="Log In"
        textColor="black"
        borderColor="black"
        backgroundColor="white"
      />

      <H1Text text="105+ Tutorials" />
      <StudentsAreViewing />

      <div className="flex overflow-x-auto">
        <div className="flex">
          <HomePageTestimonialCard />
        </div>
      </div>

      <H1Text text="75+ Educators, Influencers & Icons" />
      <Link href="/all-educators">
        <SH2Text text="OUR EDUCATORS" color={''} />
      </Link>
      <Refresh fill={''} />
      <div className="overflow-x-auto">
        <div className="flex mx-5">
          <RecommendedEducatorIconCard />
          <RecommendedEducatorIconCard />
          <RecommendedEducatorIconCard />
          <RecommendedEducatorIconCard />
          <RecommendedEducatorIconCard />
          <RecommendedEducatorIconCard />
        </div>
      </div>
      <PrimaryHalfButton
        link="/sign-up"
        text="GIFT A SUBSCRIPTION"
        textColor="black"
        borderColor="black"
        backgroundColor="white"
      />
      <CourseSubCallOut />
    </div>
  );
}

export default HomePageNotSignedIn;

