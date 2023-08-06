import CategoriesList from "@/components/CategoriesList";
import HomePageNotSignedIn from "@/components/HomePageNotSignedIn";
import NavDashboard from "@/components/header/NavDashboard";
import Link from "next/link";


// to do: everything
export default function Subscribe() {
  return (
    <main>
      <NavDashboard />
      <CategoriesList />
   <HomePageNotSignedIn />  
   
    </main>
  );
}








