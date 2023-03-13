import Link from 'next/link';
import Image from 'next/image';
import suitcase from '../public/icons/suitcase.svg'

function Nav() {
  return (
    <nav>
      {/* <Link href={'/product'}>Product</Link>
      <Link href={'/design'}>Design</Link>
      <Link href={'/dev'}>Code</Link> */}
      <Link href={'/samples'}>Work Samples ✏︎</Link>
    </nav>
  );
}

export default Nav;
