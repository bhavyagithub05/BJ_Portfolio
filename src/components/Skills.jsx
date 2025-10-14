import React from 'react'
import logo from '../assets/logo.js'
import { motion } from 'motion/react'
const Skills = () => {
  return (
    <>
      <div className='flex flex-col flex-wrap self-center gap-4 mb-10 left-0 right-0 py-20'>
        <motion.div
        initial={{opacity:0.2, y:100}}
        transition={{duration:1}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        className='text-5xl font-light self-center gap-1'>
          <span className='text-[#947272]'>S</span>
          <span className='text-[#102A43]'>kills</span>
        </motion.div>
        <motion.div
        initial={{opacity:0.2, x:-100}}
        transition={{duration:1}}
        whileInView={{opacity:1, x:0}}
        viewport={{once:true}}
        className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-10 lg:gap-20 justify-items-center rounded-2xl font-semibold text-[#102A43] py-10 px-4'>
          <motion.div
          initial={{opacity:0, x:-20}}
      animate={{opacity:1, x:0}}
      transition={{delay:0.2, duration:0.8}}
          className='flex flex-col items-center gap-1 transition-all hover:scale-[1.1] duration-[0.6s] ease-in-out grid-box'>
            <img src={logo.html} className="size-15 w-fit" alt="" />
            <span>HTML5</span>
          </motion.div>
          <motion.div
          initial={{opacity:0, x:-20}}
      animate={{opacity:1, x:0}}
      transition={{delay:0.2, duration:0.8}}
          className='flex flex-col items-center gap-1 transition-all hover:scale-[1.1] duration-[0.6s] ease-in-out grid-box'>
            <img src={logo.css}  className="size-15" alt="" />
            <span>CSS3</span>
          </motion.div>
          <motion.div
          initial={{opacity:0, x:-20}}
      animate={{opacity:1, x:0}}
      transition={{delay:0.2, duration:0.8}}
          className='flex flex-col items-center gap-1 transition-all hover:scale-[1.1] duration-[0.6s] ease-in-out grid-box'>
            <img src={logo.javascript}  className="size-15" alt="" />
            <span>JavaScript</span>
          </motion.div>
          <motion.div
          initial={{opacity:0, x:-20}}
      animate={{opacity:1, x:0}}
      transition={{delay:0.2, duration:0.8}}
          className='flex flex-col items-center gap-1 transition-all hover:scale-[1.1] duration-[0.6s] ease-in-out grid-box'>
            <img src={logo.reactJS}  className="size-15" alt="" />
            <span>ReactJS</span>
          </motion.div>
          <motion.div
          initial={{opacity:0, x:-20}}
      animate={{opacity:1, x:0}}
      transition={{delay:0.2, duration:0.8}}
          className='flex flex-col items-center gap-1 transition-all hover:scale-[1.1] duration-[0.6s] ease-in-out grid-box'>
            <img src={logo.tailwindCSS}  className="size-11 w-fit my-2" alt="" />
            <span>Tailwind</span>
          </motion.div>
          <motion.div
          initial={{opacity:0, x:-20}}
      animate={{opacity:1, x:0}}
      transition={{delay:0.2, duration:0.8}}
          className='flex flex-col items-center gap-1 transition-all hover:scale-[1.1] duration-[0.6s] ease-in-out grid-box'>
            <img src={logo.nodeJS} className="size-15" alt="" />
            <span>NodeJS</span>
          </motion.div>
          <motion.div
          initial={{opacity:0, x:-20}}
      animate={{opacity:1, x:0}}
      transition={{delay:0.2, duration:0.8}}
          className='flex flex-col items-center gap-1 transition-all hover:scale-[1.1] duration-[0.6s] ease-in-out grid-box'>
            <img src={logo.expressJS} className="size-15" alt="" />
            <span>ExpressJS</span>
          </motion.div>
          <motion.div
          initial={{opacity:0, x:-20}}
      animate={{opacity:1, x:0}}
      transition={{delay:0.2, duration:0.8}}
          className='flex flex-col items-center gap-1 transition-all hover:scale-[1.1] duration-[0.6s] ease-in-out grid-box'>
            <img src={logo.mongoDb} className="size-15" alt="" />
            <span>MongoDb</span>
          </motion.div>
          <motion.div
          initial={{opacity:0, x:-20}}
      animate={{opacity:1, x:0}}
      transition={{delay:0.2, duration:0.8}}
          className='flex flex-col items-center gap-1 transition-all hover:scale-[1.1] duration-[0.6s] ease-in-out grid-box'>
            <img src={logo.C} className="size-15" alt="" />
            <span>C++</span>
          </motion.div>
          <motion.div
          initial={{opacity:0, x:-20}}
      animate={{opacity:1, x:0}}
      transition={{delay:0.2, duration:0.8}}
          className='flex flex-col items-center gap-1 transition-all hover:scale-[1.1] duration-[0.6s] ease-in-out grid-box'>
            <img src={logo.Postman}  className="size-15" alt="" />
            <span>Postman</span>
          </motion.div>
        </motion.div>
      </div>
      <div className='border-b border-black/30 w-full max-w-7xl mx-auto'></div>
    </>
  )
}

export default Skills