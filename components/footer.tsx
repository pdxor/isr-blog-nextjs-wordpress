// import { useState } from 'react';
import Link from "next/link";
import MailchimpSignupForm from '../components/footer/MailchimpSignupForm';
import FooterFAQ from '../components/footer/FooterFAQ';
import FooterSocialIcons from '../components/footer/FooterSocialIcons';
import FooterSupport from '../components/footer/FooterSupport';
import SH4Text from "./text/SH4Text";

function Footer() {
  const currentYear = new Date().getFullYear(); // get the current year dynamically
  return (
    <footer className="bg-black">

      <div className="container mx-auto px-6 py-10 text-left text-xs">
        <div className="flex flex-wrap text-white">
          {/* Column 1 */}
          <Link href="/support" className="mb-5 text-xs">
            <SH4Text text='FAQ & CUSTOMER SUPPORT' />
          </Link>

        </div>
        {/* Column 2 */}
        <div className="w-full md:w-1/3  text-white font-bold">

          <div>
            <p className="mb-3 font-display text-base">Sign up for our newsletter</p>
            <MailchimpSignupForm />
          </div>
        </div>
        {/* Column 3 */}
        <div className="w-full md:w-1/3 text-white font-bold">
          <div className="mb-4">
            <FooterSupport />
            <Link href="https://behindthechair.com/privacy-policy/" className="text-xs mb-10">PRIVACY POLICY </Link>
          </div>
          <div className="mb-4">
            <Link href="https://behindthechair.com/terms-of-service/" className="text-xs mb-10">TERMS OF SERVICE</Link>
          </div>
          <div>

          </div>
          <FooterSocialIcons />
          <p className="text-xs">&copy; {currentYear} behindthechair.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
