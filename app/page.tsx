import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";



export default function Home() {
  return (
    <main className="flex min-h-screen bg-black flex-col w-full items-center justify-between overflow-hidden ">
    <section className='px-[100px] flex flex-col w-full items-center justify-between'>
      <Navbar className='z-20 ' />
      <Herosection />
    </section>
  
    
   
  </main>
  )
}
