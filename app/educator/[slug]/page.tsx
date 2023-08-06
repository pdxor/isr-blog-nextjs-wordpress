
import { Educator } from "@/interfaces"; // import EDUCATORS from interfaces.ts
import { EducatorMetaData } from "../../../interfaces";
import { GET_EDUCATOR_BY_SLUG, GET_All_EDUCATORS_SLUGS } from "@/graphql/queries";
// import { getClient } from "@/lib/apolloClient";
import { client } from "../../../lib/apolloClient";
import { GET_ALL_COURSES } from "@/graphql/queries";
import NavDashboard from "@/components/header/NavDashboard";
import CourseCard from "@/components/CourseCard";
import Testimonials from "@/components/Testimonials";
import CategoriesList from "@/components/CategoriesList";
import AboutTheEducatorLongBio from "@/components/AboutTheEducatorLongBio";
import Image from "next/image";
import H2Text from "@/components/text/H2Text";
import SH2Text from "@/components/text/SH2Text";
import RecommendedEducator from "@/components/RecomendedEducator";
// export const metadata = {
//   title: 'BTC University',
//   description: 'Copyright © Behindthechair.com 2023. All rights reserved.',
// }
// TO DO: description field above, see comment in haircutting/page.tsx

export default async function SlugPage({ params }: { params: { slug: string } }) {

  const educatorData = await getEducator(params);

  if (!educatorData) {
    return (
      <main>
        <div>Loading...</div>
      </main>
    );
  }
  const response = await client.query({
    query: GET_ALL_COURSES
  })
  const courses = response.data.courses.nodes;
  const cards = Array.isArray(educatorData.educatorMetaData.courses) 
  ? courses
      .filter((course: any) => 
          educatorData.educatorMetaData.courses.some(educatorCourse => educatorCourse.id === course.id)
      )
      .map((course: any) => (
        <CourseCard key={course.uri} course={course} />
      ))
  : [];

  return (
    <main>

    <NavDashboard />
          <CategoriesList />
          <div className="p-2">
          <div className="flex flex-col items-center">
          <div className="rounded-full overflow-hidden">
          <Image
            src={educatorData?.educatorMetaData?.educatorpicture?.mediaItemUrl || "https://btcu2023react.wpengine.com/wp-content/uploads/2023/07/placeholder-profile-sq.jpg"}
            alt="Image"
            width={172}
            height={229}
          />
</div>
            <H2Text text={educatorData.title} />
            <SH2Text text={educatorData.educatorMetaData ? educatorData.educatorMetaData.instahandle : 'No handle are available '} color="black" />
            </div>
        
         <div className="pt-2 pb-2">
              <div className="pt-1 pb-3">
    
                <SH2Text text="COURSES" color={""} />
              </div>
              <div className="flex overflow-x-auto space-x-4">
              <div className="flex overflow-x-auto space-x-4">
              {cards}
              </div>
              </div>
            </div>
       <AboutTheEducatorLongBio />
       <Testimonials />
       <RecommendedEducator />
       </div>
        </main>   
  );
}

async function getEducator(params: { slug: string }): Promise<Educator> {
  // const client = getClient();
  const encodedSlug = encodeURIComponent(params.slug);
  const response = await client.query({
    query: GET_EDUCATOR_BY_SLUG,
    variables: {
      id: `${params.slug}`,
    },
  });
  const educator: Educator = response?.data?.educator;
  return educator;
}


export async function generateStaticParams() {
  // const client = getClient();
  const response = await client.query({
    query: GET_All_EDUCATORS_SLUGS,
  });

  const educators = response.data.educators.nodes;

  return educators.map((educator: { slug: string }) => ({
    slug: educator.slug,
  }));
}