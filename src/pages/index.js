import Carousel from '@/components/Carousel'
import Services from '@/components/Service'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
  <Carousel/>
  <Services/>
   </>
  )
}
