"use client";
import Image from 'next/image';
import RegisterNowButton from '../components/buttons/RegisterButton';
import StartCourseButton from '../components/buttons/StartCourseButton';
import PrimaryHalfButton from '@/components/buttons/PrimaryHalfButton';
import Upcoming from '@/components/Upcoming';
import RecentlyReleased from '@/components/RecentlyReleased';
import StudentsAreViewing from '@/components/StudentsAreViewing';
import NavDashboard from '@/components/header/NavDashboard';
import CategoriesList from '@/components/CategoriesList';
import H1Text from '@/components/text/H1Text';
import HomePageNotSignedIn from '@/components/HomePageNotSignedIn';
import HomePageSignInNonSubscriber from '@/components/HomePageSignInNonSubscriber';
import HomePageSubscriber from '@/components/HomePageSubscriber';

export default function Home() {
  const handleSubscribe = () => {
  };
  const handleRegistration = () => {
  };
// to do: build functions  

  return (
    <main>
      
      <NavDashboard />
      <CategoriesList />
      <div>
     <PrimaryHalfButton
        link="/courses/tigi-colour-technique-soft-shading"
        text="Example Course page"
        textColor="white"
        borderColor="white"
        backgroundColor="#A8765F"
      />
   </div>
       <PrimaryHalfButton
        link="/haircutting"
        text="Example category page (haircutting)"
        textColor="white"
        borderColor="white"
        backgroundColor="#A8765F"
      />
       <PrimaryHalfButton
        link="/educator/Andrew-Fitzsimons"
        text="Example educator page"
        textColor="white"
        borderColor="white"
        backgroundColor="#A8765F"
      />  
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <HomePageNotSignedIn />
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <HomePageSignInNonSubscriber />
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <HomePageSubscriber />
      <hr></hr>
      <hr></hr>
      <hr></hr>
  
   
   
   <br>
   </br>
    </main>
  )
}
