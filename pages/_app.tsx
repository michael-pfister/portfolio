import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
// @ts-ignore
import AOS from "aos";

import "aos/dist/aos.css";
import { useEffect } from 'react';


function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return <>
    <Head>
        <title>Michael Pfister</title>
        <meta name="description" content="Michael Pfister Web Developer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className=''>
      <Component {...pageProps} />
    </main>
  </>
}

export default MyApp
