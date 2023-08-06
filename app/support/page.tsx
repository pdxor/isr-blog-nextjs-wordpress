import CategoriesList from "@/components/CategoriesList";
import NavDashboard from "@/components/header/NavDashboard";
import B2Text from "@/components/text/B2Text";
import H1Text from "@/components/text/H1Text";
import SH2Text from "@/components/text/SH2Text";
import Link from "next/link";


// to do: everything
export default function Support() {
  return (
    <main>
      <NavDashboard />
      <CategoriesList />
      <H1Text text="F.A.Q. & Customer Support" />
      <SH2Text text="CONTACT" color="" />
      <B2Text text="Phone: (800) 760-3010" />
      <B2Text text="Email: btcuniversity@behindthechair.com" />
      <Link href="mailto:btcuniversity@behindthechair.com">
      <SH2Text text="REPORT AN ISSUE" color="" />
      </Link>
      {/* to do: make this a button to email customer service */}
     
     
      <Link href="/profile">
        <SH2Text text="EDIT MY SUBSCRIPTION" color="" />
      </Link>

      <SH2Text text="FAQ" color="" />
insert all the faq stuff here! 
      {/* <SH2Text text="NOTIFICATIONS" color=""/> 
to do: add in a notification section, will do this after july 15th launch
*/}


    </main>
  );
}








