
import { Course } from "../../../interfaces"; // import Course from interfaces.ts
import { GET_COURSE_BY_SLUG, GET_ALL_COURSES_SLUGS } from "@/graphql/queries";
import { client } from "../../../lib/apolloClient";
import YouWillLearn from "@/components/YouWillLearn";
import SH1Text from "@/components/text/SH1Text";
import PromoTrailer from "@/components/PromoTrailer";
import CourseHighlights from "@/components/CourseHighlights";
import YouWillReceive from "@/components/YouWillRecieve";
import NavDashboard from "@/components/header/NavDashboard";
import CourseSubCallOut from "@/components/CourseSubCallOut";
import UnAuthContent from "@/components/UnAuthContent";
import RelatedCourses from "@/components/RelatedCourses";

import EducatorTeamName from "@/components/text/EducatorTeamName";
import Share from "@/components/icons/Share";
import HeartOutline from "@/components/icons/HeartOutline";
import PrimaryHalfButton from "@/components/buttons/PrimaryHalfButton";
import UpComingClassDate from "@/components/text/UpcomingClassDate";
import CourseInfo from "@/components/text/CourseInfo";
import CourseSubInfo from "@/components/text/CourseSubInfo";
import FinishedLook from "@/components/FinishedLook";
import Chapters from "@/components/Chapters";
import Testimonials from "@/components/Testimonials";
import AboutTheEducator from "@/components/AboutTheEducator";
import CategoriesList from "@/components/CategoriesList";
import SecondaryHalfButtonIconLeft from "@/components/buttons/SecondaryHalfButtonIconLeft";
import Calendar from "@/components/icons/Calendar";
import CourseContent from "@/components/CourseContent";
import PlayVideo from "@/components/icons/PlayVideo";
import PlayButton from "@/components/buttons/PlayButton";

export const metadata = {
  title: 'BTC University',
  description: 'Copyright © Behindthechair.com 2023. All rights reserved.',
}
// TO DO: description field above, see comment in haircutting/page.tsx

export default async function SlugPage({ params }: { params: { slug: string } }) {

  const courseData = await getCourse(params);

  if (!courseData) {
    return (
      <main>
        <div>Loading...</div>
      </main>
    );
  }

   

  function handlePlayButtonClick(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <main>
   
      {/* <div>{courseData.wistiaPromoLinkTrailer}</div> */}
  
      {/* <article dangerouslySetInnerHTML={{ __html: courseData.description }}></article> */}
      <div className="p-1">
        <NavDashboard />
        <CategoriesList />
        <div className="p-1">
          <UpComingClassDate />
        </div>
        <div className="p-1">
        <SH1Text text={courseData.title} />

        </div>
        <div className="p-1">
          <EducatorTeamName />
        </div>
        <PromoTrailer embedCode={""} />
        <div className="flex justify-center items-center p-3">
        <div className="pr-10">
          <HeartOutline fill={"#C4A18D"} />
          </div>
          <SecondaryHalfButtonIconLeft
        link="https://example.com"
        text="SAVE MY SPOT"
        textColor="white"
        borderColor="#C4A18D"
        backgroundColor="#C4A18D"
        fill="red" //
        icon={<Calendar fill={'white'}/>} // 
      />
      {/* to do:  this button should be a save my spot if it's an upcoming class (when clicked it adds the class to the users calendar), but a play if it's an already released class. the play button takes the user to the new page that is for members*/}
           <div className="pl-10">
            <Share /></div>
        </div>
        <div className="flex justify-center items-center p-3">
        <div className="pr-10">
          <HeartOutline fill={"#C4A18D"} />
          </div>
          <PlayButton />


         
      {/* to do:  this button should be a save my spot if it's an upcoming class (when clicked it adds the class to the users calendar), but a play if it's an already released class. the play button takes the user to the new page that is for members*/}
           <div className="pl-10">
            <Share /></div>
        </div>
        <CourseSubInfo />
        <FinishedLook />
        {courseData.courseMetadata.thumbnailpictures && <CourseHighlights />}
        <Chapters />
        <Testimonials />
        <div className="pt-3">
        {/* <CourseInfo /> */}
        </div>
        <YouWillLearn />
        <AboutTheEducator />
        <div className="pt-3">
        <YouWillReceive />
        </div>
      </div>
      <div className="pb-4">
        <RelatedCourses />
      <UnAuthContent>
        <CourseSubCallOut />
      </UnAuthContent>
      </div>

    </main>
  );
}

async function getCourse(params: { slug: string }): Promise<Course> {
  // const client = getClient();
  const encodedSlug = encodeURIComponent(params.slug);
  const response = await client.query({
    query: GET_COURSE_BY_SLUG,
    variables: {
      id: `${params.slug}`,
    },
  });
  const course: Course = response?.data?.course;
  return course;
}


export async function generateStaticParams() {
  // const client = getClient();
  const response = await client.query({
    query: GET_ALL_COURSES_SLUGS,
  });

  const courses = response.data.courses.nodes;

  return courses.map((course: { slug: string }) => ({
    slug: course.slug,
  }));
}