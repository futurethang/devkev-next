"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  backLinkStyle,
  homeLinkStyle,
  navTitleStyle,
} from "@/styles/tailwindStyles";

const Nav = ({ includeTitle = false, isHomePage = false }) => {
  const currentPath = usePathname();

  let links = [
    { path: "/samples", label: "Work" },
    { path: "/blog", label: "Blog" },
    { path: "/reading", label: "Reading" },
    { path: "/creative-catalog", label: "Creative" },
  ];

  return (
    <nav className={`flex ${isHomePage ? `sm:flex-row` : `flex-row`} gap-4`}>
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
