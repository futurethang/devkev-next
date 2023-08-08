"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { backLinkStyle, h3Style, navTitleStyle } from '@/styles/tailwindStyles';

const Nav = ({ inFooter = false }) => {
  const currentPath = usePathname();

  let links = [
    { path: '/', label: '👈 Home' },
    { path: '/samples', label: 'Work Samples 👨🏻‍💻' },
    { path: '/blog', label: 'Blog 📝' },
    { path: '/creative-catalog', label: 'Neat Stuff 👨‍🎨' },
  ];

  switch (currentPath) {
    case '/':
      links = links.filter(link => link.path !== '/');
      break;
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
      {currentPath !== '/' && !inFooter ? (<h1 className={navTitleStyle}>Kevin Hyde</h1>) : null}
      {links.map(link => (
        <Link className={backLinkStyle} key={link.path} href={link.path}>{link.label}</Link>
      ))}

    </nav>
  );
}

export default Nav;


// <nav className='flex flex-row gap-6'>
// {
//   currentPath === '/' ? (
//     <Link className={backLinkStyle} href={'/samples'}>Work Samples 👉</Link>
//   ) : (
//     <Link className={backLinkStyle} href={'/'}>👈 Home</Link>
//   )
// }
// <Link className={backLinkStyle} href={'/blog'}>Blog</Link>
// <Link className={backLinkStyle} href={'/creative-catalog'}>Neat Stuff</Link>
// </nav>