import { client } from "../../lib/apolloClient";
import { GET_ALL_HAIR_EXTENSIONS_COURSES } from "@/graphql/queries";
import SH2Text from "@/components/text/SH2Text";
import CategoriesList from "@/components/CategoriesList";
import CourseCard from "@/components/CourseCard";
import HorizontalCourseCard from "@/components/HorizontalCourseCard";
import RecomendedEducator from "@/components/RecomendedEducator";
import EducatorIconCard from "@/components/EducatorIconCard";
import NavDashboard from "@/components/header/NavDashboard";
import { Course } from "@/interfaces";


export const metadata = {
  title: 'BTC University',
  description: 'BTC University HairExtensions classes: Cutting and Styling, Hair Color, Business',

}


export default async function HairExtensionsPage() {


  const createCourseCards = (courses: Course[]) => courses
  .map((course: Course) => (
    <CourseCard key={course.uri} course={course} />
  ));

  //fetch the data
  const fetchedHairExtensionsCourses = await getHairExtensionsCourses();
  // create the cards for each tag
  const hairExtensionCards = createCourseCards(fetchedHairExtensionsCourses);
 
  
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
        {/* <Section title="All Haircuts" cards={allCutCards} /> */}
        <Section title="HAIR EXTENSIONS" cards={hairExtensionCards} />
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


async function getHairExtensionsCourses(): Promise<Course[]> {
  const HairExtensionsResponse = await client.query({
        query: GET_ALL_HAIR_EXTENSIONS_COURSES
      })
  const courses: [Course] = (HairExtensionsResponse.data.courses.nodes);

  return courses;
}