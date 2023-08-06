import Link from "next/link";
import PrimaryFullButton from "@/components/buttons/PrimaryFullButton";
import PrimaryHalfButton from "@/components/buttons/PrimaryHalfButton";
import PrimarySmallButton from "@/components/buttons/PrimarySmallButton";
import SecondaryFullButtonIconLeft from "@/components/buttons/SecondaryFullButtonIconLeft";
import MultipleVideos from '@/components/icons/MultipleVideos';
import Find from '@/components/icons/Find';

import SecondaryHalfButtonIconLeft from "@/components/buttons/SecondaryHalfButtonIconLeft";
import SecondarySmallButtonIconLeft from "@/components/buttons/SecondarySmallButtonIconLeft";
import SecondaryFullButtonIconRight from "@/components/buttons/SecondaryFullButtonIconRight";
import SecondaryHalfButtonIconRight from "@/components/buttons/SecondaryHalfButtonIconRight";
import SecondarySmallButtonIconRight from "@/components/buttons/SecondarySmallButtonIconRight";
import ActiveFullForm from "@/components/forms/ActiveFullForm";
import LockedFullForm from "@/components/forms/LockedFullForm";
import LockedHalfForm from "@/components/forms/LockedHalfForm";
import ShortBTCULogo from "@/components/header/ShortBTCULogo";
import Upcoming from "@/components/Upcoming";
import RelatedCourses from "@/components/RelatedCourses";
import RecentlyReleased from "@/components/RecentlyReleased";
import CourseHighlights from "@/components/CourseHighlights";
import HeaderSubscribeButton from "@/components/buttons/HeaderSubscribeButton";
import ProfileForm from "@/components/ProfileForm";
import CategoriesList from "@/components/CategoriesList";
import CancelFlow from "@/components/CancelFlow";



export default function Test() {
  return (
    <main>
      <h1>I am brianas component page! 
       </h1>
       <br>
       </br>
       <strong>

    
      <h1>Buttons (each button has a customizable link, text, text color, border color & background color):
            
            </h1>
            </strong>
            <h2>HeaderSubscribeButton:</h2>
            <HeaderSubscribeButton
        link="/sign-up"
        text="SUBSCRIBE"
        textColor="white"
        borderColor="#C4A18D"
        backgroundColor="#C4A18D"
      />
            <h2>PrimaryFullButton:</h2>
            
         
            <PrimaryFullButton
        link="https://example.com"
        text="Click me!"
        textColor="white"
        borderColor="white"
        backgroundColor="black"
      />

<PrimaryFullButton
        link="https://example.com"
        text="PrimaryFullButton"
        textColor="white"
        borderColor="white"
        backgroundColor="black"
      />
      <h2>PrimaryHalfButton:</h2>
      <PrimaryHalfButton
        link="https://example.com"
        text="PrimaryHalfButton"
        textColor="black"
        borderColor="black"
        backgroundColor="white"
      />
         <PrimaryHalfButton
        link="https://example.com"
        text="PrimaryHalfButton"
        textColor="black"
        borderColor="black"
        backgroundColor="white"
      />
      <h2>PrimarySmallButton:</h2>
          <PrimarySmallButton
        link="https://example.com"
        text="text"
        textColor="white"
        borderColor="red"
        backgroundColor="red"
      />
<br>
</br>
<strong>
<h1>Buttons cont. (each button has a customizable link, text, text color, border color, background color AND icon as well as icon color):

            </h1></strong>
      <h2>
      SecondardFullButtonIconLeft

      </h2>
      <SecondaryFullButtonIconLeft
  link="/"
  text="Click me"
  textColor="white"
  borderColor="black"
  backgroundColor="red"
  icon={<MultipleVideos fill="black" />}
/>

<h2>
      SecondardFullButtonIconLeft (with no text)

      </h2>
      <SecondaryFullButtonIconLeft
  link="/"
  text=""
  textColor="white"
  borderColor="red"
  backgroundColor="red"
  // fill="black"
  icon={<MultipleVideos fill="black" />}
/>
<h2>
      SecondardFullButtonIconLeft (with no icon, similar to the PrimaryFullButton)

      </h2>
      <SecondaryFullButtonIconLeft
  link="/"
  text="Click me"
  textColor="black"
  borderColor="black"
  backgroundColor="red"
   // icon={<MultipleVideos fill="black" />}
/>
<h2>
SecondaryHalfButtonIconLeft

      </h2>
<SecondaryHalfButtonIconLeft
  link="/"
  text="Click me"
  textColor="white"
  borderColor="black"
  backgroundColor="black"
   icon={<MultipleVideos fill="white" />}
/>

<h2>
SecondaryHalfButtonIconLeft 

      </h2>
<SecondarySmallButtonIconLeft
  link="/"
  text="Click"
  textColor="red"
  borderColor="white"
  backgroundColor="lightred"
    icon={<MultipleVideos fill="black" />}
/>    
<h2>
SecondaryHalfButtonIconRight

      </h2>
      <SecondaryFullButtonIconRight
  link="/"
  text="Click"
  textColor="red"
  borderColor="blue"
  backgroundColor="green"
  fill="purple"
  icon={<MultipleVideos fill="purple" />}
/>    
<h2>
SecondaryHalfButtonIconRight

</h2>
<SecondaryHalfButtonIconRight
link="/"
text="Click me"
textColor="red"
borderColor="blue"
backgroundColor="green"
icon={<MultipleVideos fill="purple" />}
/>
<h2>
SecondaryHalfButtonIconRight

</h2>
<SecondarySmallButtonIconRight
link="/"
text="Hello"
textColor="red"
borderColor="blue"
backgroundColor="green"
icon={<MultipleVideos fill="purple" />}
/>
<br>
</br>
<strong>

Forms. These are not buttons, you can type inside them! (each form has a customizable placeholder, icon & icon color):</strong>

{/* <h2>
ActiveFullForm
</h2>
<ActiveFullForm
placeholder="Search"
icon={<Find fill="black" />}
/> */}


<h2>
LockedFullForm (this form is is locked and you cannot type inside it)
</h2>
<LockedFullForm
placeholder="Search"
icon={<Find fill="black" />}
/>
<h2>
LockedHalfForm (this form is is locked and you cannot type inside it)
</h2>
<LockedHalfForm
placeholder="Search"
icon={<Find fill="black" />}
/>
<br>
</br>
<ShortBTCULogo />
<Upcoming />
<RelatedCourses />
<RecentlyReleased />
<CourseHighlights />
<CategoriesList />
<CancelFlow />

    </main>
  );
}








