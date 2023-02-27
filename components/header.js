// components/Header.js

import Link from 'next/link';
import Nav from './nav';
import styles from '@/styles/Home.module.css'


function Header() {
    return (
        <>
            <div className={styles.description}>
                <Link href={'/'}>
                    <h1><span className='kern'>K</span>evin Hyde</h1>
                </Link>
            </div>
            <Nav />
        </>
    );
}

export default Header;
