import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo';

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
  return (
    <>
      <DefaultSeo {...defaultSEOConfig} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
