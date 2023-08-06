import dynamic from "next/dynamic";
// import AuthContent from "../../components/AuthContent";

const AuthContent = dynamic(() => import("../../components/AuthContent"), {
    ssr: false,
  });

export default function MembersContent() {
  return (
    <main>
      <h1>Members</h1>
      <AuthContent>
        <p>Here is some top-secret members-only content!</p>
      </AuthContent>
    </main>
  );
}