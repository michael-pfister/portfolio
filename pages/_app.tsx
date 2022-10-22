import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { animate, motion } from "framer-motion";
// @ts-ignore
import AOS from "aos";

import "aos/dist/aos.css";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MotionConfig } from 'framer-motion';

const NavigationLinks = () => {
  return <ul className='flex flex-col lg:flex-row gap-x-16 gap-y-4 text-2xl lg:text-xl'>
  <li><Link href='/#projects' scroll={false}>Projects</Link></li>
  <li><Link href='/#twitter_feed' scroll={false}>Tweets</Link></li>
  <li><Link href='/#contact_me' scroll={false}>Contact Me</Link></li>
  <li>
    <a className='text-orange flex items-center' href='/Michael Pfister - Web Developer.pdf' target='_blank' rel="noopener">
      Resume
      <div className='relative w-6 h-6'>
        <Image src='/download-svgrepo-com.svg' alt='download icon' layout='fill' />
      </div>
    </a>
  </li>
</ul>;
}

const AppBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  return <header className='w-full flex justify-between items-center p-4 absolute'>
    <h1 className='text-2xl text-white'>M I C H A E L .</h1>

    {/* desktop */}
    <nav className='hidden lg:inline-block'>
      <NavigationLinks />
    </nav>
    
    {/* mobile */}
    <nav className='lg:hidden fixed z-10 w-screen h-screen top-0 bottom-0'>
      <button className='absolute right-4 z-20 bg-[rgba(0,0,0,0)] cursor-pointer' onClick={()=>setMobileOpen(!mobileOpen)} aria-label="open mobile navigation">
        <motion.div className='relative w-8 h-8' animate={{rotate: mobileOpen ? -90 : 0}}>
          <Image src='/navigation-svgrepo-com.svg' alt='menu icon' layout='fill' />
        </motion.div>
      </button>
      <motion.div className='absolute w-4/5 sm:w-3/5 md:w-2/5 h-screen bg-black border-l-2 border-[#000] p-4' animate={{right: mobileOpen ? 0 : '-100%'}} onClick={()=>setMobileOpen(!mobileOpen)} >
        <NavigationLinks />
      </motion.div>
    </nav>
  </header>
}

const LinkIcon = ({imgSrc, imgAlt, href, ariaLabel}: {imgSrc:string, imgAlt: string, href:string, ariaLabel:string}) => {
  return <a className='relative w-8 h-8' href={href} target='_blank' aria-label={ariaLabel} rel='noreferrer'>
    <Image src={imgSrc} alt={imgAlt} layout='fill' />
  </a>
}

const Footer = () => {
  return <footer className='p-4 pt-12 flex justify-center gap-4 bg-orange'>
    <LinkIcon imgSrc='/github-svgrepo-com.svg' imgAlt='Github Icon' href='https://github.com/michael-pfister' ariaLabel='Github' />
    <LinkIcon imgSrc='/twitter-svgrepo-com.svg' imgAlt='Twitter Icon' href='https://twitter.com/ScaredToCompile' ariaLabel='Twitter' />
  </footer>
}

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      offset: 50
    });
  }, []);
  return <>
    <Head>
        <title>Michael Pfister - Professional Web Developer</title>
        <meta name="description" content="Michael Pfister Web Developer Portfolio" />
        <link rel="icon" href="/favicon.ico" />

        {/*The Open Graph protocol*/}
        <meta property="og:title" content="Michael Pfister" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Michael Pfister's web developer portfolio." />
        <meta property="og:url" content="https://michael-pfister.vercel.app/" />
        <meta property="og:image" content="https://michael-pfister.vercel.app/ogImage.webp" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Michael Pfister" />
        <meta name="twitter:description" content="Michael Pfister's web developer portfolio." />
        <meta name="twitter:image" content="https://michael-pfister.vercel.app/ogImage.webp" />
        <meta property="twitter:creator" content="@ScaredToCompile" />
    </Head>
    <AppBar />
    <main className='overflow-hidden'>
      <Component {...pageProps} />
    </main>
    <Footer />
  </>
}

export default MyApp
