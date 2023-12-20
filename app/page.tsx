import Image from 'next/image'
import Herosection from './components/Herosection'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import News from './components/News'
import Testimonials from './components/Testomonials'

export default function Home() {
  return (
    <main className="flex min-h-screen bg-black flex-col w-full items-center justify-between overflow-hidden ">
      <section className='px-[100px] flex flex-col w-full items-center justify-between'>
        <Navbar className='z-20 ' />
        <Herosection />
      </section>
      
      <News />
      <section className='px-[100px] '>
        <Testimonials />
        <Footer />
      </section>
      
     
    </main>
  )
}
