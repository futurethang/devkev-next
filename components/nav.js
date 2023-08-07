import Link from 'next/link';
import { backLinkStyle } from '@/styles/tailwindStyles';

function Nav() {
  return (
    <nav className='flex flex-row gap-6'>
      <Link className={backLinkStyle} href={'/samples'}>Work Samples 👉</Link>
      <Link className={backLinkStyle} href={'/blog'}>Blog</Link>
      <Link className={backLinkStyle} href={'/creative-catalog'}>Neat Stuff</Link>
    </nav>
  );
}

export default Nav;
