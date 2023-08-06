import ShortBTCULogo from "@/components/header/ShortBTCULogo";
import UnAuthContent from "../../components/UnAuthContent";
// import SignUpForm from "../../components/SignUpForm";

import dynamic from "next/dynamic";

const SignUpForm = dynamic(() => import("../../components/SignUpForm"), {
  ssr: false,
});

export default function SignUp() {
  return (
<main className="">
<div className="py-8 px-4 sm:px-20 w-full sm:w-3/4 mx-auto">
       
     
        <UnAuthContent>
        <SignUpForm />
      </UnAuthContent>
      </div>
    </main>
  );
}
