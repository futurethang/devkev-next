// components/Header.js

import Link from 'next/link';
import Nav from './nav';
import styles from '../styles/Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <Link href={'/'}>
                    <h3><span className='kern'>K</span>evin Hyde</h3>
                </Link>
            </div>
            <nav>
                <Link href={'/product'}>Product</Link>
                <Link href={'/design'}>Design</Link>
                <Link href={'/dev'}>Code</Link>
                <Link href={'/dev'}>Contact</Link>
                <Link href={'/dev'}>Cool Stuff</Link>
                <Link href={'/dev'}>SkunkWorks</Link>
            </nav>
            <div className='copyright'>
                ©2023 Kevin Hyde
            </div>
        </footer>
    );
}

export default Footer;
