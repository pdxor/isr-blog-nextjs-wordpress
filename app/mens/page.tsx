import { client } from "../../lib/apolloClient";
import { GET_ALL_MENS_COURSES } from "@/graphql/queries";
import Link from "next/link";
import SH2Text from "@/components/text/SH2Text";
import CategoriesList from "@/components/CategoriesList";
import CourseCard from "@/components/CourseCard";
import HorizontalCourseCard from "@/components/HorizontalCourseCard";
import RecomendedEducator from "@/components/RecomendedEducator";
import EducatorIconCard from "@/components/EducatorIconCard";
import NavDashboard from "@/components/header/NavDashboard";
import { Course } from "@/interfaces";


export default async function Mens() {

  // our dynamic card generator function
  const createCourseCards = (courses: Course[], courseName: string) => courses
  .filter((course: Course) => {
    return course.tags.nodes.slice(0, 5).some((tag) => tag.slug.toLowerCase() === courseName);
  })
  .map((course: Course) => (
    <CourseCard key={course.uri} course={course} />
  ));

  //fetch the data
  const getAllMensCourses = await getMensCourses();
  // cards per hair color tag
  const hairMensCuttingStylingCards = createCourseCards(getAllMensCourses, "mens-cutting-styling");
  const hairFadesBarberingCards = createCourseCards(getAllMensCourses, "mens-fades-barbering");





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

        <Section title="Cutting & Styling" cards={hairMensCuttingStylingCards} />
        <Section title="Fades & Barbering" cards={hairFadesBarberingCards} />
        <RecomendedEducator />
        <div className="pt-5 pb-2">
          <SH2Text text="HIGHLY RATED" color={""} />
        </div>
        <div className="flex overflow-x-auto space-x-4">
          <HorizontalCourseCard />
          <HorizontalCourseCard />
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


async function getMensCourses(): Promise<Course[]> {
  const haircuttingResponse = await client.query({
        query: GET_ALL_MENS_COURSES
      })
  const courses: [Course] = (haircuttingResponse.data.courses.nodes);

  return courses;
}






