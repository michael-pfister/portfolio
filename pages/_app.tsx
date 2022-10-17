import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
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
