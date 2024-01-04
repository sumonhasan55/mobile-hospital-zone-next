import AboutPage from '@/components/About'
import Carousel from '@/components/Carousel'
import GalleryPage from '@/components/Gallery'
import Services from '@/components/Service'
import VideoPage from '@/components/Videos'
import WhyusPage from '@/components/WhyusCard'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
  <Carousel/>
  <Services/>
  <GalleryPage/>
  <VideoPage/>
  <WhyusPage/>
  <AboutPage/>
  
   </>
  )
}
