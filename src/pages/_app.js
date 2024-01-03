import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  
const router = useRouter()
  return(
<>
<Head>
<title>Mobile_Zone</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" />
  </Head>
  <Navbar/>
 {
   <Component key={router.asPath} {...pageProps} />
 }
 <Footer/>

</>
   


  )
   
}