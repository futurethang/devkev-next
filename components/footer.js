// components/Header.js

import Link from 'next/link';
import Nav from './nav';
import { SocialIcon } from 'react-social-icons';
import styles from '../styles/Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.connect}>
                <Link href={'/'}>
                    <h3>Kevin Hyde</h3>
                </Link>
                <SocialIcon bgColor='#ffff00' style={{ height: '1.75rem', width: '1.75rem' }} target="_blank" url="mailto:kphyde@gmail.com" />
                <SocialIcon bgColor='#ffff00' style={{ height: '1.75rem', width: '1.75rem' }} target="_blank" url="https://t.me/futurethang" />
                <SocialIcon bgColor='#ffff00' style={{ height: '1.75rem', width: '1.75rem' }} target="_blank" url="https://github.com/futurethang" />
                <SocialIcon bgColor='#ffff00' style={{ height: '1.75rem', width: '1.75rem' }} target="_blank" url="https://www.linkedin.com/in/kevin-hyde-fullstack/" />
            </div>
            <nav>
                <Link href={'/samples'}>Work Samples</Link>
                <Link href={'/blog'}>Blog</Link>
                <Link href={'/cool-stuff'}>Cool Stuff</Link>
                {/* <Link href={'#'}>SkunkWorks</Link> */}
            </nav>
            <div className='copyright'>
                ©2023 Kevin Hyde
            </div>
        </footer>
    );
}

export default Footer;
