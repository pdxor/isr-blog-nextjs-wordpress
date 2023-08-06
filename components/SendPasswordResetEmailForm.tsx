"use client";
import { useMutation, gql } from "@apollo/client";
import Link from "next/link";

const SEND_PASSWORD_RESET_EMAIL = gql`
  mutation sendPasswordResetEmail($username: String!) {
    sendPasswordResetEmail(
      input: { username: $username }
    ) {
      user {
        databaseId
      }
    }
  }
`;

export default function SendPasswordResetEmailForm() {
  const [sendPasswordResetEmail, { loading, error, data }] = useMutation(
    SEND_PASSWORD_RESET_EMAIL
  );
  const wasEmailSent = Boolean(data?.sendPasswordResetEmail?.user?.databaseId);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const { email } = Object.fromEntries(data);
    sendPasswordResetEmail({
      variables: {
        username: email,
      }
    }).catch(error => {
      console.error(error);
    });
  }

  if (wasEmailSent) {
    return (
      <p> Please check your email. A password reset link has been sent to you.</p>
    );
  }

  return (
    <div className="bg-white rounded-lg p-4 text-center">
      <h1 className="text-center text-2xl">Forgot Password</h1>
      <br />
      <form method="post" onSubmit={handleSubmit}>
        <fieldset disabled={loading} aria-busy={loading}>
          <p>
            Enter the email associated with your account and you&#39;ll be sent a link to reset your password.
          </p>
          <div className="flex flex-col justify-center">
            <input
              id="password-reset-email"
              type="email"
              name="email"
              autoComplete="email"
              required
              className="w-4/5 px-2 py-1 my-2 mx-auto"
              placeholder="Email Address"
            />
          </div>
          {error ? (
            <p className="error-message">{error.message}</p>
          ) : null}
          <button
            type="submit"
            disabled={loading}
            className="bg-red px-4 py-1 text-white"
          >
            {loading ? 'Sending...' : 'Send Password Reset Email'}
          </button>
        </fieldset>
      </form>
      <p className="account-sign-up-message inline-flex text-sm">
        Don&#39;t have an account yet?&nbsp; {' '}
        <Link href="/sign-up">
          <p className="underline">Sign up</p>
        </Link>
      </p>
    </div>
  );  
}