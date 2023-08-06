import { client } from "../../lib/apolloClient";
import { GET_ALL_HAIRCOLOR_COURSES } from "@/graphql/queries";
import Link from "next/link";
import SH2Text from "@/components/text/SH2Text";
import CategoriesList from "@/components/CategoriesList";
import CourseCard from "@/components/CourseCard";
import HorizontalCourseCard from "@/components/HorizontalCourseCard";
import RecomendedEducator from "@/components/RecomendedEducator";
import EducatorIconCard from "@/components/EducatorIconCard";
import NavDashboard from "@/components/header/NavDashboard";
import { Course } from "@/interfaces";


export default async function Haircolor() {

  // our dynamic card generator function
  const createCourseCards = (courses: Course[], courseName: string) => courses
  .filter((course: Course) => {
    return course.tags.nodes.slice(0, 5).some((tag) => tag.slug.toLowerCase() === courseName);
  })
  .map((course: Course) => (
    <CourseCard key={course.uri} course={course} />
  ));

  //fetch the data
  const getHaircuttingCourses = await getHaircutCourses();
  // cards per hair color tag
  const hairColorBalayageCards = createCourseCards(getHaircuttingCourses, "hair-color-balayage");
  const hairColorFoilingCards = createCourseCards(getHaircuttingCourses, "hair-color-foiling");
  const hairColorPlatinumBlondesCards = createCourseCards(getHaircuttingCourses, "hair-color-platinum-blondes");
  const hairColorBrunettesCards = createCourseCards(getHaircuttingCourses, "hair-color-brunettes");
  const hairColorCurlsTextureCards = createCourseCards(getHaircuttingCourses, "hair-color-curls-texture");
  const hairColorRedsCoppersCards = createCourseCards(getHaircuttingCourses, "hair-color-reds-coppers");
  const hairColorToningTechniquesCards = createCourseCards(getHaircuttingCourses, "hair-color-toningtechniques");
  const hairColorGrayCoverageCards = createCourseCards(getHaircuttingCourses, "hair-color-graycoverage");
  const hairColorRootSmudgeShadowsMeltsCards = createCourseCards(getHaircuttingCourses, "hair-color-root-smudge-shadows-melts");
  const hairColorCreativeColorCards = createCourseCards(getHaircuttingCourses, "hair-color-creative-color");




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

        <Section title="BALAYAGE" cards={hairColorBalayageCards} />
        <Section title="FOILING" cards={hairColorFoilingCards} />
        <Section title="PLATINUM BLONDES" cards={hairColorPlatinumBlondesCards} />

        <Section title="BRUNETTES" cards={hairColorBrunettesCards} />
        <RecomendedEducator />
        <Section title="CURLS & TEXTURE" cards={hairColorCurlsTextureCards} />

        <div className="pt-5 pb-2">
          <SH2Text text="HIGHLY RATED" color={""} />
        </div>
        <div className="flex overflow-x-auto space-x-4">
          <HorizontalCourseCard />
          <HorizontalCourseCard />
        </div>

        <Section title="REDS & COPPERS" cards={hairColorRedsCoppersCards} />
        <Section title="TONING TECHNIQUES" cards={hairColorToningTechniquesCards} />

        <Section title="GRAY COVERAGE" cards={hairColorGrayCoverageCards} />


        <Section title="ROOT, SMUDGE, SHADOWS & MELTS" cards={hairColorRootSmudgeShadowsMeltsCards} />

        <Section title="CREATIVE COLOR" cards={hairColorCreativeColorCards} />

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
        query: GET_ALL_HAIRCOLOR_COURSES
      })
  const courses: [Course] = (haircuttingResponse.data.courses.nodes);

  return courses;
}






