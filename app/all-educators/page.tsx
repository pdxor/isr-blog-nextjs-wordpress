import CategoriesList from "@/components/CategoriesList";

import NavDashboard from "@/components/header/NavDashboard";
import SH2Text from "@/components/text/SH2Text";

import RecommendedEducatorIconCard from "@/components/RecommendedEducatorIconCard";

// to do: everything
export default function AllEducators() {
  return (
    <main>

<NavDashboard />
      <CategoriesList />
      <div className="p-2">
        
     
       {/* haircutting */}
       <div className="pt-2 pb-2">
       <SH2Text text="HAIRCUTTING" color={""} />
       <div className="flex flex-wrap justify-center items-center">
  <div className="w-1/4">
    <RecommendedEducatorIconCard />
  </div>
  <div className="w-1/4">
    <RecommendedEducatorIconCard />
  </div>
  <div className="w-1/4">
    <RecommendedEducatorIconCard />
  </div>
  <div className="w-1/4">
    <RecommendedEducatorIconCard />
  </div>
  <div className="w-1/4">
    <RecommendedEducatorIconCard />
  </div>
  <div className="w-1/4">
    <RecommendedEducatorIconCard />
  </div>
  <div className="w-1/4">
    <RecommendedEducatorIconCard />
  </div>
  <div className="w-1/4">
    <RecommendedEducatorIconCard />
  </div>
  <div className="w-1/4">
    <RecommendedEducatorIconCard />
  </div>
  <div className="w-1/4">
    <RecommendedEducatorIconCard />
  </div>
</div></div>
       {/* hair coloring */}
       <div className="pt-2 pb-2">

       <SH2Text text="HAIR COLORING" color={""} />
       </div>
       <div className="flex flex-wrap justify-center items-center">
  <div className="w-1/4">
    <RecommendedEducatorIconCard />
  </div>
  <div className="w-1/4">
    <RecommendedEducatorIconCard />
  </div>
  <div className="w-1/4">
    <RecommendedEducatorIconCard />
  </div>
  <div className="w-1/4">
    <RecommendedEducatorIconCard />
  </div>
  <div className="w-1/4">
    <RecommendedEducatorIconCard />
  </div>
  <div className="w-1/4">
    <RecommendedEducatorIconCard />
  </div>
  <div className="w-1/4">
    <RecommendedEducatorIconCard />
  </div>

  </div>

 {/*  mens */}
 <div className="pt-2 pb-2">

 <SH2Text text="MENS" color={""} />
 </div>
       <div className="flex flex-wrap justify-center items-center">
  <div className="w-1/4">
    <RecommendedEducatorIconCard />
  </div>
  <div className="w-1/4">
    <RecommendedEducatorIconCard />
  </div>
  <div className="w-1/4">
    <RecommendedEducatorIconCard />
  </div>
  <div className="w-1/4">
    <RecommendedEducatorIconCard />
  </div>
  <div className="w-1/4">
    <RecommendedEducatorIconCard />
  </div>
  <div className="w-1/4">
    <RecommendedEducatorIconCard />
  </div>
  <div className="w-1/4">
    <RecommendedEducatorIconCard />
  </div>

  </div>
   {/* STYLING  */}
   <div className="pt-2 pb-2">

   <SH2Text text="STYLING " color={""} />
   </div>
       <div className="flex flex-wrap justify-center items-center">
  <div className="w-1/4">
    <RecommendedEducatorIconCard />
  </div>
  <div className="w-1/4">
    <RecommendedEducatorIconCard />
  </div>
  <div className="w-1/4">
    <RecommendedEducatorIconCard />
  </div>
  <div className="w-1/4">
    <RecommendedEducatorIconCard />
  </div>
  <div className="w-1/4">
    <RecommendedEducatorIconCard />
  </div>
  <div className="w-1/4">
    <RecommendedEducatorIconCard />
  </div>
  <div className="w-1/4">
    <RecommendedEducatorIconCard />
  </div>

  </div>
   {/* SOCIAL MEDIA  */}
   <div className="pt-2 pb-2">

   <SH2Text text="SOCIAL MEDIA " color={""} />
   </div>
       <div className="flex flex-wrap justify-center items-center">
  <div className="w-1/4">
    <RecommendedEducatorIconCard />
  </div>
  <div className="w-1/4">
    <RecommendedEducatorIconCard />
  </div>
  <div className="w-1/4">
    <RecommendedEducatorIconCard />
  </div>
  <div className="w-1/4">
    <RecommendedEducatorIconCard />
  </div>
  <div className="w-1/4">
    <RecommendedEducatorIconCard />
  </div>
  <div className="w-1/4">
    <RecommendedEducatorIconCard />
  </div>
  <div className="w-1/4">
    <RecommendedEducatorIconCard />
  </div>

  </div>
   {/* BUSINESS  */}
   <div className="pt-2 pb-2">

   <SH2Text text="BUSINESS " color={""} />
   </div>
       <div className="flex flex-wrap justify-center items-center">
  <div className="w-1/4">
    <RecommendedEducatorIconCard />
  </div>
  <div className="w-1/4">
    <RecommendedEducatorIconCard />
  </div>
  <div className="w-1/4">
    <RecommendedEducatorIconCard />
  </div>
  <div className="w-1/4">
    <RecommendedEducatorIconCard />
  </div>
 


  </div>
   </div>
    </main>
  );
}

// to do: this whole page. i have a feeling this will end up actually being a custom page where we hand pick the artists and use use this type of layout. but each artist should link to their corresponding educator page. going to leave this like this for now, and will come back once i have a better feeling. 