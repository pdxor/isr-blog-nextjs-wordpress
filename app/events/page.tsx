import { client } from "../../lib/apolloClient";
import { GET_ALL_BTC_EVENTS_COURSES } from "@/graphql/queries";
import Link from "next/link";
import SH2Text from "@/components/text/SH2Text";
import CategoriesList from "@/components/CategoriesList";
import CourseCard from "@/components/CourseCard";
import HorizontalCourseCard from "@/components/HorizontalCourseCard";
import RecomendedEducator from "@/components/RecomendedEducator";
import EducatorIconCard from "@/components/EducatorIconCard";
import NavDashboard from "@/components/header/NavDashboard";
import { Course } from "@/interfaces";

export default async function Events() {

  const createCourseCards = (courses: Course[], courseName: string) => courses
  .filter((course: Course) => {
    return course.tags.nodes.slice(0, 5).some((tag) => tag.slug.toLowerCase() === courseName);
  })
  .map((course: Course) => (
    <CourseCard key={course.uri} course={course} />
  ));

  const getbtcEventsCourses = await getBtcEventsCourses();

  const btcEventsTheBtcShowCards = createCourseCards(getbtcEventsCourses, "btc-events-the-btc-show");
  const btcEventsOneshotHairAwardsCards = createCourseCards(getbtcEventsCourses, "btc-events-oneshot-hair-awards");
  const btcEventsBtcOnTourCards = createCourseCards(getbtcEventsCourses, "btc-events-btc-on-tour");
  const btcEventsSocialClimbingCards = createCourseCards(getbtcEventsCourses, "btc-events-social-climbing");
  const btcEventsOnStageCoLabsCards = createCourseCards(getbtcEventsCourses, "btc-events-on-stage-co-labs");

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

        <Section title="THE BTC SHOW" cards={btcEventsTheBtcShowCards} />
        <Section title="#ONESHOT HAIR AWARDS" cards={btcEventsOneshotHairAwardsCards} />
        <Section title="BTC “ON TOUR”" cards={btcEventsBtcOnTourCards} />
        <Section title="SOCIAL CLIMBING" cards={btcEventsSocialClimbingCards} />
        <Section title="ON-STAGE CO-LABS" cards={btcEventsOnStageCoLabsCards} />

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

async function getBtcEventsCourses(): Promise<Course[]> {
  const btcEventsResponse = await client.query({
        query: GET_ALL_BTC_EVENTS_COURSES
      })
  const courses: [Course] = (btcEventsResponse.data.courses.nodes);

  return courses;
}
