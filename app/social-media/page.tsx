import CategoriesList from "@/components/CategoriesList";
import NavDashboard from "@/components/header/NavDashboard";
import SH2Text from "@/components/text/SH2Text";
import Link from "next/link";


// to do: everything
export default function SocialMedia() {
  return (
    <main>
        <NavDashboard />
      <CategoriesList />
      <SH2Text text="MOST WATCHED THIS WEEK" color={""} />

      <SH2Text text="BOBS + LOBS" color={""} />
      <SH2Text text="LAYERS" color={""} />

      LAYERS
      <h1>placeholder for the social media page, 
        <p>
   
        </p>
      </h1>
   
    </main>
  );
}
