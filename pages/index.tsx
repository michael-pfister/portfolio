import type { NextPage } from 'next'
import Image from 'next/image'
import { motion } from "framer-motion"


const Hero = () => {
  return <section className='flex flex-col md:items-center my-16 bg-[url("/low-poly-grid.svg")] bg-cover bg-no-repeat md:flex-row items-end'>
    <motion.div className='w-full flex justify-center p-4' initial={{ scale: 0, rotate: 180 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
    }}>
      <h1>
          <text className='text-5xl md:text-7xl'>Hi, I{"'"}m Michael! 👋</text>
          <br/>
          <br/>
          <text className='text-3xl md:text-5xl'>
            A Professional Web Developer
          </text>
      </h1>
    </motion.div>
    <div className='w-[400px] md:w-[800px] aspect-[2692/2284] relative'>
      <Image src="/hero.webp" alt='Michael Pfister working on a laptop' layout='fill' />
    </div>
  </section>
}

const Home: NextPage = () => {
  return (
    <>
      <Hero />
    </>
  )
}

export default Home
