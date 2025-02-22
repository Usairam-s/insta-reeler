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
          title="Insta-Reeler"
          className="text-3xl text-primary font-bold no-underline"
        />
        <div>
          {/* <NavLink href="/insta" title="Instagram" />
          <NavLink href="/facebook" title="Facebook" />
          <NavLink href="/tiktok" title="Tiktok" /> */}
          <ThemeToggler />
        </div>
        {/* Show Mobile Nav here */}
        {/* <MobileNav /> */}
      </header>
    </>
  );
};

export default Navbar;
