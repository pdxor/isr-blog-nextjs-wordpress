"use client"
import dynamic from "next/dynamic";
// import AuthContent from "../../components/AuthContent";
import SH1TextMont from "@/components/text/SH1TextMont";
import MyInfo from "@/components/MyInfo";
import PrimaryHalfButton from "@/components/buttons/PrimaryHalfButton";
import SH2TextMont from "@/components/text/SH2TextMont";
import Tier from "@/components/icons/Tier";
import Calendar from "@/components/icons/Calendar";
import Plus from "@/components/icons/Plus";
import H1Text from "@/components/text/H1Text";
import B1Text from "@/components/text/B1Text";
import SH2Text from "@/components/text/SH2Text";
import SH1Text from "@/components/text/SH1Text";
import SH2TextMontStyledAsH1 from "@/components/text/SH2TextMontStyledAsH1";
import { useState } from 'react';
import YourPlan from "@/components/YourPlan";
import MyPayment from "@/components/MyPayment";
import Link from "next/link";

// const AuthContent = dynamic(() => import("../../components/AuthContent"), {
//   ssr: false,
// });

const Profile = () => {
  const [isMyInfoOpen, setIsMyInfoOpen] = useState(false);
  const [isYourPlanOpen, setIsYourPlanOpen] = useState(false);
  const [isMyPaymentOpen, setIsMyPaymentOpen] = useState(false);


  const openMyInfoModal = () => {
    setIsMyInfoOpen(!isMyInfoOpen);
  };

  const openYourPlanModal = () => {
    setIsYourPlanOpen(!isYourPlanOpen);
  };
  const openMyPaymentModal = () => {
    setIsMyPaymentOpen(!isMyPaymentOpen);
  };
  
  return (
    <main className="flex w-full flex-col justify-center">
      <div className="mt-11 mb-3 flex flex-col justify-center items-center cursor-pointer">
        <div className="rounded-full w-36 h-36 flex flex-col justify-center items-center bg-pressedGrey">
          <Plus
            fill={'black'}
            width="132px"
            height="132px"
          />
        </div>
        <B1Text text="Add your Photo" />
      </div>
      <div className="mb-12 flex justify-center">
        <H1Text text="Justin Adams" />
      </div>
      {/* <div className="flex justify-center">
        <SH2TextMontStyledAsH1 text="Gold Tier" />
      </div>
      <div className="flex flex-col items-center mb-8">
        <div className="flex justify-center items-center pt-5 mb-4">
          <span className="mr-3">
            <Tier fill={'black'} />
          </span>
          <SH2Text text="345 Points" color={""} />
        </div>
        <B1Text text="Only 100 Points from Platinum" />
      </div> */}
      <div className="flex flex-col items-center mb-8">
        <div className="mb-4">
          <SH2TextMontStyledAsH1 text="Upcoming Courses" />
        </div>
        <ul className="flex flex-col items-center justify-center">
          <li className="flex items-center justify-center">
            <Calendar fill={'black'} />
            <B1Text text="Upcoming Class Name" />
            <B1Text text="&nbsp;10/23" />
          </li>
          <li className="flex items-center justify-center">
            <Calendar fill={'black'} />
            <B1Text text="" />
            <B1Text text="Upcoming Class Name" />
            <B1Text text="&nbsp;11/23" />
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center mb-8">
        <div className="mb-4">
        <Link href='/favorites'>
          <SH2TextMontStyledAsH1 text="Liked" />
          <SH2TextMont text="" />
          </Link>
        </div>
        
        <ul className="flex justify-center">
        <Link href='/favorites'>
          <li className="flex flex-col items-center justify-center mr-3">
          
            <SH2Text text="Courses" color={""} />
            <B1Text text="10" />
          
          </li>
          </Link>
          <li className="flex flex-col items-center mr-3">
          <Link href='/favorites'>
            <SH2Text text="Educators" color={""} />
            <B1Text text="10" />
            </Link>
          </li>
          {/* <li className="flex flex-col items-center"  >
            <SH2Text text="Formulas" color={""} />
            <B1Text text="3" />
          </li> */}
          {/* commented formulas out because mary doesn't want people liking formulas since those have to do with the course itself.  */}
        </ul>
      </div>
      <div className="flex flex-col items-center mb-8">
        <div className="mb-4">
          <Link href='/completed'>
          <SH2TextMont text="Completed" />
          </Link>
        </div>
        <ul className="flex justify-center">
          <li className="flex flex-col items-center mr-3">
          <Link href='/completed'>
            <SH2Text text="Courses" color={""} />
            <B1Text text="10" />
            </Link>
          </li>
          <li className="flex flex-col items-center">
          <Link href='/completed'>
            <SH2Text text="Certificates" color={""} />
            <B1Text text="10" />
            </Link>
          </li>
        </ul>
      </div>
      <div className='flex justify-center mb-7' onClick={openMyInfoModal}>
        <PrimaryHalfButton
          link="#"
          text="UPDATE MY INFO"
          textColor="black"
          borderColor="black"
          backgroundColor="white"
          padding="24px 33px"
          width="100%"
          maxWidth="192px"
          type="submit"
          disabled=''
        />
      </div>
      <div className='flex justify-center mb-7' onClick={openMyPaymentModal}>
        <PrimaryHalfButton
          link="#"
          text="EDIT PAYMENT INFO"
          textColor="black"
          borderColor="black"
          backgroundColor="white"
          padding="24px"
          width="100%"
          maxWidth="192px"
          type="submit"
          disabled=''
        />
      </div>
      <div className='flex justify-center' onClick={openYourPlanModal}>
        <PrimaryHalfButton
          link="#"
          text="EDIT SUBSCRIPTION"
          textColor="black"
          borderColor="black"
          backgroundColor="white"
          padding="24px"
          width="100%"
          maxWidth="192px"
          type="submit"
          disabled=''
        />
      </div>
      {isMyInfoOpen && (
        <MyInfo />
      )}
         {isMyPaymentOpen && (
        <MyPayment />
      )}
      {isYourPlanOpen && (
        <YourPlan />
      )}
    </main>
  );
}

export default Profile;

// to do: when the update my info button is clicked, an over lay/menu appears with the <myinfo /> component on it. 