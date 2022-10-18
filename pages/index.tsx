import type { NextPage } from 'next'
import Image from 'next/image'
import { motion } from "framer-motion"
import AdvantageWidget from '../components/AdvantageWidget'


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

const MyAdvantages = () => {
  return <section className='flex justify-evenly'>
    <motion.div className='w-[500px] aspect-[1233/929] hidden lg:inline-block relative' initial={{x:-10}} animate={{x: 20}} transition={{repeat: Infinity, repeatType:"reverse", ease:"linear", duration: 2}}>
      <Image src='/Rocket Boy.svg' alt='Rocket' layout='fill' />
    </motion.div>
    <div className='flex flex-col gap-8 items-center' data-aos="fade-left">
      <h1 className='text-5xl'>My Advantage</h1>
    <div className='flex flex-wrap justify-center items-center gap-4'>
      <AdvantageWidget imageSource='/programming_experience.svg' heading='Programming Experience' description='Over 6 years of programming experience.' />
      <AdvantageWidget imageSource='/Team_Lineal-coloured.svg' heading='Active Team Player' description='Collaboration in open source projects.' />
      <AdvantageWidget imageSource='/Online Learning_Flat.svg' heading='Super Fast Learner' description='Highly adaptive to new technologies.' />
    </div>
    </div>
  </section>
}

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <MyAdvantages />
    </>
  )
}

export default Home
