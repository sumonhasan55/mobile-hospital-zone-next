/* eslint-disable @next/next/no-page-custom-font */
import Footer from '@/components/Footer'
import { SessionProvider } from "next-auth/react"
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps: { session, ...pageProps }}) {
  const router = useRouter();

  // Check if the current route is the dashboard
  const isDashboardRoute = router.pathname === '/dashboard';

  return (
    <>
      <Head>
        <title>Mobile_Zone</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" />
      </Head>

      <SessionProvider session={session}>
        {!isDashboardRoute && <Navbar />}
        <Component key={router.asPath} {...pageProps} />
        {!isDashboardRoute && <Footer />}
        
      </SessionProvider>
    </>
  );
}
