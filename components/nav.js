// components/Header.js

import Link from 'next/link';

function Nav() {
  return (
    <nav>
      <Link href={'/product'}>Product</Link>
      <Link href={'/design'}>Design</Link>
      <Link href={'/dev'}>Code</Link>
    </nav>
  );
}

export default Nav;
