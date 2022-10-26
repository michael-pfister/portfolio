import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { animate, motion } from "framer-motion";
// @ts-ignore
import AOS from "aos";

import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MotionConfig } from "framer-motion";

const NavigationLinks = () => {
  return (
    <ul className="flex flex-col lg:flex-row gap-x-16 gap-y-4 text-2xl lg:text-xl" data-cy="navigation point list">
      <li>
        <Link href="/#my_advantage" scroll={false}>
          My Advantage
        </Link>
      </li>
      <li>
        <Link href="/#projects" scroll={false}>
          Projects
        </Link>
      </li>
      <li>
        <Link href="/#twitter_feed" scroll={false}>
          Tweets
        </Link>
      </li>
      <li>
        <Link href="/#contact_me" scroll={false}>
          Contact Me
        </Link>
      </li>
      <li>
        <a
          className="text-orange flex items-center"
          href="/Michael Pfister - Web Developer.pdf"
          target="_blank"
          rel="noopener"
        >
          Resume
          <div className="relative w-6 h-6">
            <Image
              src="/download-svgrepo-com.svg"
              alt="download icon"
              layout="fill"
            />
          </div>
        </a>
      </li>
    </ul>
  );
};

const AppBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="w-full flex justify-between items-center p-4 absolute">
      <h1 className="text-2xl text-white">M I C H A E L .</h1>

      {/* desktop */}
      <nav className="hidden lg:inline-block">
        <NavigationLinks />
      </nav>

      {/* mobile */}
      <nav className="lg:hidden" data-cy="mobile navigation">
        <button
          className="fixed top-0 right-0 z-20 bg-[rgba(0,0,0,0)] cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="open mobile navigation"
        >
          <motion.div
            className="relative w-8 h-8"
            animate={{ rotate: mobileOpen ? -90 : 0 }}
          >
            <Image
              src="/navigation-svgrepo-com.svg"
              alt="menu icon"
              layout="fill"
            />
          </motion.div>
        </button>
        <motion.div
          className="fixed top-0 right-0 z-10 w-4/5 sm:w-3/5 md:w-2/5 h-screen bg-black border-l-2 border-[#000] p-4"
          animate={{ right: mobileOpen ? 0 : "-100%" }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <NavigationLinks />
        </motion.div>
      </nav>
    </header>
  );
};

const LinkIcon = ({
  imgSrc,
  imgAlt,
  href,
  ariaLabel,
}: {
  imgSrc: string;
  imgAlt: string;
  href: string;
  ariaLabel: string;
}) => {
  return (
    <a
      className="relative w-8 h-8"
      href={href}
      target="_blank"
      aria-label={ariaLabel}
      rel="noreferrer"
    >
      <Image src={imgSrc} alt={imgAlt} layout="fill" />
    </a>
  );
};

const Footer = () => {
  return (
    <footer className="p-4 pt-12 flex justify-center gap-4 bg-orange">
      <LinkIcon
        imgSrc="/github-svgrepo-com.svg"
        imgAlt="Github Icon"
        href="https://github.com/michael-pfister"
        ariaLabel="Github"
      />
      <LinkIcon
        imgSrc="/twitter-svgrepo-com.svg"
        imgAlt="Twitter Icon"
        href="https://twitter.com/ScaredToCompile"
        ariaLabel="Twitter"
      />
      <LinkIcon
        imgSrc="/linkedin-svgrepo-com.svg"
        imgAlt="LinkedIn Icon"
        href="https://www.linkedin.com/in/michael-pascal-pfister/"
        ariaLabel="LinkedIn"
      />
    </footer>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <>
      <Head>
        <title>Michael Pfister | Professional Web Developer</title>
        <meta
          name="title"
          content="Michael Pfister | Professional Web Developer"
        />
        <meta
          name="description"
          content="Michael Pfister's personal portfolio page, primarily used for business."
        />
        <meta name="author" content="Michael Pfister" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:site_name" content="michael-pfister.vercel.app" />
        <meta
          property="og:site"
          content="https://michael-pfister.vercel.app/"
        />
        <meta
          property="og:title"
          content="Michael Pfister | Professional Web Developer"
        />
        <meta
          property="og:description"
          content="Michael Pfister's personal portfolio page, primarily used for business."
        />
        <meta
          property="og:image"
          content="http://raw.githubusercontent.com/michael-pfister/portfolio/main/public/ogImage.webp"
        />
        <meta property="og:url" content="https://michael-pfister.vercel.app/" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="Michael Pfister | Professional Web Developer"
        />
        <meta
          property="twitter:image"
          content="http://raw.githubusercontent.com/michael-pfister/portfolio/main/public/ogImage.webp"
        />
        <meta
          property="twitter:description"
          content="Michael Pfister's personal portfolio page, primarily used for business."
        />
        <meta property="twitter:creator" content="@ScaredToCompile" />
      </Head>
      <AppBar />
      <main
        className="overflow-hidden"
      >
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
