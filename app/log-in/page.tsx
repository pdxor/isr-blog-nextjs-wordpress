// import UnAuthContent from "../../components/UnAuthContent";
// import LogInForm from "../../components/LogInForm";
// import { useRouter } from "next/router";

// export default function LogIn() {
// // const router = useRouter();
//   return (
//     <main>
//       <h1>Log In</h1>
//       <UnAuthContent>
//         <LogInForm />
//       </UnAuthContent>
//     </main>
//   );
// }

// import useAuth from "../../hooks/useAuth";

// export default function LogIn() {
//   const { loggedIn, loading } = useAuth();
  
//   return (
//     <main>
//       <h1>Log In</h1>
//       <UnAuthContent loggedIn={loggedIn} loading={loading}>
//         <LogInForm />
//       </UnAuthContent>
//     </main>
//   );
// }

import dynamic from "next/dynamic";
import UnAuthContent from "../../components/UnAuthContent";
import CategoriesList from "@/components/CategoriesList";

const LogInForm = dynamic(() => import("../../components/LogInForm"), {
  ssr: false,
});

export default function LogIn() {
  return (
    <main className="">
      <CategoriesList />
<div className="py-8 px-4 sm:px-20 w-full sm:w-3/4 mx-auto">

    <LogInForm />
</div>

    </main>
  );
}