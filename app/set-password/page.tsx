"use client";
// import { useRouter } from "next/router";
import { useRouter, useSearchParams } from "next/navigation";
import SetPasswordForm from "../../components/SetPasswordForm";

export default function SetPassword() {
  const router = useRouter();
  const searchParams = useSearchParams();
//   const resetKey = String(router.query.key || '');
  const resetKey = searchParams.get('key') || '';
//   const login = String(router.query.login || '');
  const login = searchParams.get('login') || '';

  return (
    <main>
      <h1>Set Password</h1>
      <SetPasswordForm resetKey={resetKey} login={login} />
    </main>
  )
}