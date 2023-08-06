import React from 'react';
import RightArrow from '../icons/RightArrow';

const MailchimpSignupForm = () => {
  return (
    <div id="mc_embed_signup" className="bg-transparent clear-left font-sans text-base flex flex-wrap items-center mb-5">
      <form action="https://btcuniversity.us12.list-manage.com/subscribe/post?u=7c5c34894c443c59e5c06dcb7&amp;id=e616551742&amp;f_id=003650e0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate w-full" target="_self">
        <div id="mc_embed_signup_scroll" className="flex items-center">
          <div className="mc-field-group text-black flex-grow">
            <input type="email" name="EMAIL" defaultValue="" className="required email font-light h-14 appearance-none w-full p-4" id="mce-EMAIL" required placeholder="Email Address" />
          </div>
          <div className="clear w-1/9 w-full max-w-[55px]">
            <button type="submit" name="subscribe" id="mc-embedded-subscribe" className="button w-full h-14 appearance-none pl-3.5" style={{ backgroundColor: "#D9D9D9" }}><RightArrow fill={'white'} /></button>
          </div>
          {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
          <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
            <input type="text" name="b_7c5c34894c443c59e5c06dcb7_e616551742" value="" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default MailchimpSignupForm;
