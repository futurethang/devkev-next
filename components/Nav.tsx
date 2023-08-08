"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { backLinkStyle, h3Style, navTitleStyle } from '@/styles/tailwindStyles';

const Nav = ({ includeTitle = false }) => {
  const currentPath = usePathname();

  let links = [
    { path: '/samples', label: 'Work Samples' },
    { path: '/blog', label: 'Blog' },
    { path: '/creative-catalog', label: 'Neat Stuff' },
  ];

  switch (currentPath) {
    case '/samples':
      links = links.filter(link => link.path !== '/samples');
      break;
    case '/blog':
      links = links.filter(link => link.path !== '/blog');
      break;
    case '/creative-catalog':
      links = links.filter(link => link.path !== '/creative-catalog');
      break;
    default:
      break;
  }

  return (
    <nav className='flex flex-row gap-6'>
      {includeTitle ?
        (<Link key="home" href={"/"}>
          <h1 className={`${navTitleStyle} sm:hidden`}>KH</h1>
          <h1 className={`${navTitleStyle} hidden sm:flex`}>Kevin Hyde</h1>
        </Link>)
        :
        null}
      {links.map(link => (
        <Link className={backLinkStyle} key={link.path} href={link.path}>{link.label}</Link>
      ))}

    </nav>
  );
}

export default Nav;