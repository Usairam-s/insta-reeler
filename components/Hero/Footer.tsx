import Link from "next/link";
import React from "react";

import { ThemeToggler } from "../theme/ThemeToggler";
import NavLink from "../Navbar/NavLink";

const Footer = () => {
  return (
    <>
      <header className="flex pt-2 items-center my-8 justify-between max-w-6xl mx-auto px-6 ">
        <NavLink
          href="/"
          title="Insta-Reeler"
          className="text-2xl text-primary font-bold no-underline"
        />
        <div>
          {/* <NavLink href="/insta" title="Instagram" />
          <NavLink href="/facebook" title="Facebook" />
          <NavLink href="/tiktok" title="Tiktok" /> */}
          <p>Made with ♥️ by Usairam</p>
        </div>
        {/* Show Mobile Nav here */}
        {/* <MobileNav /> */}
      </header>
    </>
  );
};

export default Footer;
