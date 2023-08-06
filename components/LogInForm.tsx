// TO DO: A remember me function. also a sign in w/ social. 
"use client";
import Link from "next/link";
import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import { GET_USER } from "../hooks/useAuth";
import LogInButton from "./buttons/LogInButton";
import '../styles/globals.css';
import CategoriesList from "./CategoriesList";
import H1Text from "./text/H1Text";
import H1TextCentered from "./text/H1TextCentered"
import B1Text from "./text/B1Text";
import PrimaryFullButton from "./buttons/PrimaryFullButton";
import SecondaryFullButtonIconLeft from "./buttons/SecondaryFullButtonIconLeft";
import MultipleVideos from "./icons/MultipleVideos";
import Facebook from "./icons/Facebook";
import Gmail from "./icons/Gmail";
import BTC from "./icons/BTC";
import { LOG_IN } from "@/graphql/mutations";

export default function LogInForm() {
  // Add state for email and password
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [focusedInput, setFocusedInput] = useState("");
  // const [rememberMe, setRememberMe] = useState(false); // Add state for remember me checkbox
  const [logIn, { loading, error }] = useMutation(LOG_IN, {
    refetchQueries: [{ query: GET_USER }],
  });
  const errorMessage = error?.message || "";
  const isEmailValid =
    !errorMessage.includes("empty_email") &&
    !errorMessage.includes("empty_username") &&
    !errorMessage.includes("invalid_email") &&
    !errorMessage.includes("invalid_username");
  const isPasswordValid =
    !errorMessage.includes("empty_password") &&
    !errorMessage.includes("incorrect_password");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const { email, password } = Object.fromEntries(data);
    logIn({
      variables: {
        login: email,
        password,
        // rememberMe, // Pass rememberMe value to mutation
      },
    }).catch((error) => {
      console.error(error);
    });
  }

  // function handleInputFocus(event: React.FocusEvent<HTMLInputElement>) {
  //   setFocusedInput(event.target.name);
  // }

  // function handleInputBlur() {
  //   setFocusedInput("");
  // }

  // function handleRememberMeChange(event: React.ChangeEvent<HTMLInputElement>) {
  //   setRememberMe(event.target.checked);
  // }

  return (
    <div className="">
      <H1TextCentered text="Log In"/>
      {/* to do:     these log in w/ social media buttons do not actually work. */}
      {/* <SecondaryFullButtonIconLeft
  link="/"
  text="LOG IN WITH FACEBOOK"
  textColor="black"
  borderColor="black"
  backgroundColor="transparent"
  icon={<Facebook />}
/>
<SecondaryFullButtonIconLeft
  link="/"
  text="LOG IN WITH GMAIL"
  textColor="black"
  borderColor="black"
  backgroundColor="transparent"
  icon={<Gmail />}
/>
<SecondaryFullButtonIconLeft
  link="/"
  text="LOG IN WITH BTC"
  textColor="black"
  borderColor="black"
  backgroundColor="transparent"
  icon={<BTC />}
/> */}
      {/* <B1Text text="Or" /> */}
      <form method="post" onSubmit={handleSubmit}>
        <fieldset disabled={loading} aria-busy={loading}>
          <div className="flex flex-col justify-left text-sm">
            <label htmlFor="log-in-email"></label>
            <input
              id="log-in-email"
              type="email"
              name="email"
              autoComplete="username"
              required
              className={`px-2 py-2 border border-black bg-gray-100`}
              placeholder="Email Address"
            // onFocus={handleInputFocus}
            // onBlur={handleInputBlur}
            />
          </div>
          <div className="flex flex-col justify-left pt-2 text-sm">
            <label htmlFor="log-in-password"></label>
            <input
              id="log-in-password"
              type="password"
              name="password"
              autoComplete="current-password"
              required
              className={`px-2 py-2 border border-black bg-gray-100`}
              placeholder="Password"
            // onFocus={handleInputFocus}
            // onBlur={handleInputBlur}
            />
          </div>
          {/* <div className="flex flex-col justify-left pt-2 text-sm">
            <label htmlFor="remember-me">
              <input
                id="remember-me"
                type="checkbox"
                name="rememberMe"
                className="mr-2"
                checked={rememberMe}
                onChange={handleRememberMeChange} // Add onChange handler here
              />

              Remember Me
            </label>
          </div> */}
          <fieldset disabled={loading} aria-busy={loading} className="flex justify-between items-left flex-col pt-2">
            <div className="pb-2">
              <Link href="/forgot-password">
                <div className="forgot-password-link text-sm">Forgot your password?</div>
              </Link>
              {!isEmailValid ? (
                <p className="error-message">Invalid email. Please try again.</p>
              ) : null}
              {!isPasswordValid ? (
                <p className="error-message">Invalid password. Please try again.</p>
              ) : null}
            </div>
            {/* to do: need to style this log in (action) button */}
            <button type="submit" disabled={loading}>
              {loading ? 'Logging in...' : 'Log in'}
            </button>
          </fieldset>
        </fieldset>
        <p className="account-sign-up-message inline-flex text-sm">
          Don&#39;t have an account yet?&nbsp;
          <Link href="/sign-up">
            <p className="underline">Sign Up</p>
          </Link>
        </p>
      </form>
    </div>
  );

}
