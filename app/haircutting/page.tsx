import { client } from "../../lib/apolloClient";
import { GET_ALL_HAIRCUTTING_COURSES } from "@/graphql/queries";
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
  description: 'BTC University Haircutting classes: Bobs and Lobs, Shags, Layers, Curly and Textured Cuts, Dry Cutting, Razor Cutting, Pixie, Extensions',

}


export default async function HaircuttingPage() {


  const createCourseCards = (courses: Course[], courseName: string) => courses
  .filter((course: Course) => {
    return course.tags.nodes.slice(0, 5).some((tag) => tag.slug.toLowerCase() === courseName);
  })
  .map((course: Course) => (
    <CourseCard key={course.uri} course={course} />
  ));

  //fetch the data
  const getHaircuttingCourses = await getHaircutCourses();
  // create the cards for each tag
  const shagsCards = createCourseCards(getHaircuttingCourses, "haircutting-shags");
  const bobsAndLobsCards = createCourseCards(getHaircuttingCourses, "haircutting-bobslobs");
  const LayersCards = createCourseCards(getHaircuttingCourses, "haircutting-layer");
  const RazorCuttingCards = createCourseCards(getHaircuttingCourses, "haircutting-razorcutting");
  const DryCuttingCards = createCourseCards(getHaircuttingCourses, "haircutting-drycutting");
  const PixieCards = createCourseCards(getHaircuttingCourses, "haircutting-pixie");
  const ExtensionCards = createCourseCards(getHaircuttingCourses, "haircutting-extensions");
 
  
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
        <Section title="LAYERS" cards={LayersCards} />
        <Section title="EXTENSIONS" cards={ExtensionCards} />
        <Section title="BOBS + LOBS" cards={bobsAndLobsCards} />
 
        <Section title="RAZOR CUTTING" cards={RazorCuttingCards} />
        <RecomendedEducator />
        <Section title="SHAGS" cards={shagsCards} />
        <div className="pt-5 pb-2">
          <SH2Text text="HIGHLY RATED" color={""} />
        </div>
        <div className="flex overflow-x-auto space-x-4">
          <HorizontalCourseCard />
          <HorizontalCourseCard />
        </div>
        <Section title="DRY CUTTING" cards={DryCuttingCards} />
        <Section title="PIXIE" cards={PixieCards} />
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


async function getHaircutCourses(): Promise<Course[]> {
  const haircuttingResponse = await client.query({
        query: GET_ALL_HAIRCUTTING_COURSES
      })
  const courses: [Course] = (haircuttingResponse.data.courses.nodes);

  return courses;
}