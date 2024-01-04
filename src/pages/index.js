import AboutPage from '@/components/About'
import Carousel from '@/components/Carousel'
import Services from '@/components/Service'
import WhyusPage from '@/components/WhyusCard'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
  <Carousel/>
  <Services/>
  <WhyusPage/>
  <AboutPage/>
  
   </>
  )
}
