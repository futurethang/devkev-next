import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo';
import { useEffect } from 'react';
import Script from 'next/script';

const defaultSEOConfig = {
  title: 'Kevin Hyde - Web Developer and Product Designer',
  description: 'Kevin Hyde is a full stack web developer and designer of user experiences, products, and graphics.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.devkev.net/',
    site_name: 'Kevin Hyde - Web Developer and Product Designer',
    images: [
      {
        url: 'https://www.devkev.net/og-image.jpg',
        width: 1200,
        height: 628,
        alt: 'Kevin Hyde - Web Developer and Product Designer',
      },
    ],
  },
  twitter: {
    handle: '@futurethang',
    site: '@futurethang',
    cardType: 'summary_large_image',
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const handleScroll = () => {
      console.log('scrolling');
      const bg = document.body;
      const scrolled = document.documentElement.scrollTop || document.body.scrollTop;
      bg.style.backgroundPositionY = -(scrolled * 0.1) + 'px';
    };

    if (typeof window !== 'undefined') {
      document.addEventListener('scroll', handleScroll);

      return () => {
        document.removeEventListener('scroll', handleScroll);
      };
    }
  }, []); // Empty array means this effect runs once on mount and clean up on unmount


  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <DefaultSeo {...defaultSEOConfig} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
