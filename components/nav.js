import Link from 'next/link';
import Image from 'next/image';
import suitcase from '../public/icons/suitcase.svg'
import { backLinkStyle } from '@/styles/tailwindStyles';

function Nav() {
  return (
    <nav className='flex flex-row gap-6'>
      <Link className={backLinkStyle} href={'/samples'}>Work Samples 👉</Link>
      <Link className={backLinkStyle} href={'/blog'}>Blog</Link>
      <Link className={backLinkStyle} href={'/extra'}>Neat Stuff</Link>
    </nav>
  );
}

export default Nav;
