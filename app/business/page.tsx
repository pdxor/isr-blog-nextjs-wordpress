import { client } from "../../lib/apolloClient";
import { GET_ALL_BUSINESS_COURSES } from "@/graphql/queries";
import Link from "next/link";
import SH2Text from "@/components/text/SH2Text";
import CategoriesList from "@/components/CategoriesList";
import CourseCard from "@/components/CourseCard";
import HorizontalCourseCard from "@/components/HorizontalCourseCard";
import RecomendedEducator from "@/components/RecomendedEducator";
import EducatorIconCard from "@/components/EducatorIconCard";
import NavDashboard from "@/components/header/NavDashboard";
import { Course } from "@/interfaces";

export default async function Business() {

  const createCourseCards = (courses: Course[], courseName: string) => courses
  .filter((course: Course) => {
    return course.tags.nodes.slice(0, 5).some((tag) => tag.slug.toLowerCase() === courseName);
  })
  .map((course: Course) => (
    <CourseCard key={course.uri} course={course} />
  ));

  const getAllBusinessCourses = await getBusinessCourses();

  const businessRecessionCards = createCourseCards(getAllBusinessCourses, "business-recession");
  const businessSocialMediaCards = createCourseCards(getAllBusinessCourses, "business-social-media");
  const businessManagementCultureCards = createCourseCards(getAllBusinessCourses, "business-management-culture");
  const businessConsultationsCards = createCourseCards(getAllBusinessCourses, "business-consultations");
  const businessCovidSupportCards = createCourseCards(getAllBusinessCourses, "business-covid-support");
  const businessInterviewsCards = createCourseCards(getAllBusinessCourses, "business-interviews");
  const businessSocialMediaForHairdressersCards = createCourseCards(getAllBusinessCourses, "business-social-media-for-hairdressers");

  return (
    <main>
      <NavDashboard />
      <CategoriesList />
      <div className="p-2">
        <div className="pt-4 pb-2">
          <div className="">
            <SH2Text text="MOST WATCHED THIS WEEK" color={""} />
          </div>
          <div className="flex overflow-x-auto space-x-4">
            <HorizontalCourseCard />
            <HorizontalCourseCard />
          </div>
        </div>

        <Section title="RECESSION" cards={businessRecessionCards} />
        <Section title="SOCIAL MEDIA" cards={businessSocialMediaCards} />
        <Section title="MANAGEMENT & CULTURE" cards={businessManagementCultureCards} />
        <Section title="CONSULTATIONS" cards={businessConsultationsCards} />
        <Section title="COVID SUPPORT" cards={businessCovidSupportCards} />
        <Section title="INTERVIEWS" cards={businessInterviewsCards} />
        <Section title="SERIES: SOCIAL MEDIA FOR HAIRDRESSERS" cards={businessSocialMediaForHairdressersCards} />

        <RecomendedEducator />

        <div className="pt-5 pb-2">
          <SH2Text text="HIGHLY RATED" color={""} />
        </div>
        <div className="flex overflow-x-auto space-x-4">
          <HorizontalCourseCard />
          <HorizontalCourseCard />
        </div>

        <div className="pt-5 pb-2">
          <SH2Text text="EDUCATOR SPOTLIGHT" color={""} />
        </div>
        <EducatorIconCard />
      </div>
    </main>

  );
}

const Section = ({ title, cards }: { title: string, cards: JSX.Element[] }) => (
  <div className="pt-5 pb-2">
    <div className="">
      <SH2Text text={title} color={""} />
    </div>
    <div className="flex overflow-x-auto space-x-4">
      {cards}
    </div>
  </div>
);

async function getBusinessCourses(): Promise<Course[]> {
  const businessResponse = await client.query({
        query: GET_ALL_BUSINESS_COURSES
      })
  const courses: [Course] = (businessResponse.data.courses.nodes);

  return courses;
}