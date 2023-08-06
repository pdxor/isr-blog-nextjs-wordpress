"use client";

import { useState } from "react";
import useAuth from "../hooks/useAuth";
import Head from "./header/Head";
import HamburgerComponent from "./header/HamburgerComponent";
import ShortBTCULogo from "./header/ShortBTCULogo";
import HeaderSubscribeButton from "./buttons/HeaderSubscribeButton";
import UnAuthContent from "./UnAuthContent";
import AuthContentNoPush from "./AuthContentNoPush";
import BTCUShortlogo from "./icons/BTCUShortlogo";

function Header() {
  const { loggedIn } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="shadow-lg text-black flex items-center">
      <div className="flex items-center pl-3">
        <HamburgerComponent />
        <ShortBTCULogo />
      </div>
      <Head />
      <div className="ml-auto pr-4">
        <UnAuthContent>
          <HeaderSubscribeButton
            link="/sign-up"
            text="SUBSCRIBE"
            textColor="black"
            borderColor="black"
            backgroundColor="white"
          />
        </UnAuthContent>
        <AuthContentNoPush>
          {/* to do: add a sign out button or maybe an account button? idk */}
        </AuthContentNoPush>
      </div>
    </div>
  );
}

export default Header;

