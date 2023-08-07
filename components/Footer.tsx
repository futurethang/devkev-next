import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';
import Nav from './Nav';
import { h3Style } from '@/styles/tailwindStyles';

function Footer() {
    return (
        <footer className='w-full p-10 bg-slate-800 bottom-0'>
            <div className='inline-flex gap-4 items-center'>
                <Link href={'/'}>
                    <h3 className={h3Style}>Kevin Hyde</h3>
                </Link>
                <SocialIcon bgColor='#fde047' style={{ height: '1.75rem', width: '1.75rem' }} target="_blank" url="mailto:kphyde@gmail.com" />
                <SocialIcon bgColor='#fde047' style={{ height: '1.75rem', width: '1.75rem' }} target="_blank" url="https://github.com/futurethang" />
                <SocialIcon bgColor='#fde047' style={{ height: '1.75rem', width: '1.75rem' }} target="_blank" url="https://www.linkedin.com/in/kevin-hyde-fullstack/" />
                <SocialIcon bgColor='#fde047' style={{ height: '1.75rem', width: '1.75rem' }} target="_blank" url="https://t.me/futurethang" />
            </div>
            <Nav />
            <div className='text-sm mt-6 w-full text-center text-slate-500'>
                ©2023 Kevin Hyde
            </div>
        </footer>
    );
}

export default Footer;
