"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  backLinkStyle,
  homeLinkStyle,
  navTitleStyle,
} from "@/styles/tailwindStyles";

type NavLink = {
  path: string;
  label: string;
  external?: boolean;
};

const Nav = ({ includeTitle = false, isHomePage = false }) => {
  const currentPath = usePathname();

  const internalLinks: NavLink[] = [
    { path: "/samples", label: "Work" },
  ];

  const externalLinks: NavLink[] = [
    { path: "https://blog.kevinhyde.com", label: "Blog", external: true },
    { path: "https://music.kevinhyde.com", label: "Music", external: true },
    { path: "https://tech.kevinhyde.com", label: "Tech", external: true },
  ];

  const allLinks = [...internalLinks, ...externalLinks];

  return (
    <nav
      className={`flex flex-wrap ${
        isHomePage ? `sm:flex-row` : `flex-row`
      } gap-4 xl:translate-y-5`}
    >
      {includeTitle ? (
        <Link key="home" href={"/"}>
          <h1 className={`${navTitleStyle} sm:hidden`}>Kevin Hyde</h1>
          <h1 className={`${navTitleStyle} hidden sm:flex`}>Kevin Hyde</h1>
        </Link>
      ) : null}
      {allLinks.map((link) => (
        <Link
          className={isHomePage ? homeLinkStyle : backLinkStyle}
          key={link.path}
          href={link.path}
          {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
        >
          {link.label}
          {link.external && (
            <span className="ml-1 text-xs opacity-60">↗</span>
          )}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
