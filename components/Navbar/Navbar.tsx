import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import { ThemeToggler } from "../theme/ThemeToggler";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <>
      <header className="flex border-b pb-2 items-center my-4 justify-between max-w-6xl mx-auto px-6 ">
        <NavLink
          href="/"
          title="Free Insta Reels"
          className="text-2xl text-primary font-bold no-underline"
        />
        {/* <div> */}
        {/* <NavLink href="/insta" title="Instagram" />
          <NavLink href="/facebook" title="Facebook" />
          <NavLink href="/tiktok" title="Tiktok" /> */}
        <div className="flex items-center gap-4">
          <div className="border md:flex hidden p-2 rounded-md text-sm hover:bg-primary hover:font-medium hover:text-white">
            <a href="http://insta-post-maker.netlify.app" target="_blank">
              Try Insta Post Maker ↗
            </a>
          </div>
          <div className="-mt-1">
            <ThemeToggler />
          </div>

          <MobileNav />
        </div>

        {/* </div> */}
        {/* Show Mobile Nav here */}
      </header>
    </>
  );
};

export default Navbar;
