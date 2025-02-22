"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  href: string;
  title: string;
  className?: string;
}

const NavLink = ({ href, title, className }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <>
      <Link
        href={href}
        className={`${className ? className : ""} ${
          isActive ? "underline " : ""
        } hover:underline hover:underline-offset-8`}
      >
        {title}
      </Link>
    </>
  );
};

export default NavLink;
