"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  backLinkStyle,
  h3Style,
  homeLinkStyle,
  navTitleStyle,
} from "@/styles/tailwindStyles";

const Nav = ({ includeTitle = false, isHomePage = false }) => {
  const currentPath = usePathname();

  let links = [
    { path: "/samples", label: "Work Samples" },
    { path: "/reading", label: "Reading" },
    { path: "/blog", label: "Blog" },
    { path: "/creative-catalog", label: "Neat Stuff" },
  ];

  return (
    <nav
      className={`flex flex-col sm:flex-row ${
        isHomePage ? `flex-col sm:flex-row` : `flex-row`
      } gap-0 sm:gap-6`}
    >
      {includeTitle ? (
        <Link key="home" href={"/"}>
          <h1 className={`${navTitleStyle} sm:hidden`}>Kevin Hyde</h1>
          <h1 className={`${navTitleStyle} hidden sm:flex`}>Kevin Hyde</h1>
        </Link>
      ) : null}
      {links.map((link) => (
        <Link
          className={isHomePage ? homeLinkStyle : backLinkStyle}
          key={link.path}
          href={link.path}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
