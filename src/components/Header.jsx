import React from 'react'
import photo from '../assets/bhavya_photo1.jpg'
import logo from '../assets/logo.js'
import '../index.css'
import { motion } from 'motion/react'
const Header = () => {
  return (  
    <>
      <motion.div 
      initial={{opacity:0.2, y:100}}
      transition={{duration:1}}
      whileInView={{opacity:1, y:50}}
      viewport={{once:true}}
      className='flex flex-col justify-center items-center lg:flex-row text-[#102A43] px-10 pb-20 gap-20 my-30'>
        <motion.div
        initial={{opacity:0, y:-20}}
        animate={{opacity:1, y:0}}
        transition={{delay:0.2, duration:0.8}}
        className='flex flex-col justify-center gap-4'>
            <div className='flex flex-col gap-3'>
              <span className='text-4xl py-3 lg:text-6xl font-extralight blink'>Bhavya jain</span>
              <span className='text-1xl lg:text-2xl font-semibold bg-gradient-to-r to-[#a07878] via-purple-400 from-[#102A43]  bg-clip-text text-transparent'>Software Developer</span>
            </div>
            <p className='text-[12px] my-2 max-w-xl lg:text-[14.5px]'>Hello! I'm Bhavya — A C++ enthusiast with 150+ DSA problems solved on LeetCode and GeeksforGeeks, backed by a strong foundation in algorithms and data structures. I'm also a full-stack web developer in making, building responsive and dynamic applications using HTML, CSS, JavaScript, Tailwind CSS, React.js, Node.js, and MongoDB. Always eager to learn and take on challenges, I’m actively seeking internships, collaborations, and exciting opportunities to grow as a software developer.</p>
        </motion.div>
        <motion.div
        initial={{opacity:0, y:-20}}
        animate={{opacity:1, y:0}}
        transition={{delay:0.2, duration:0.8}}
        className='flex flex-col gap-3'>
          <img src={photo} className='size-50 lg:size-70 rounded-[50%] border-2 border-[#102A43]'/>
          <button className='border-2 border-[#102A43] font-semibold text-[14px] text-[#102A43] py-2 w-40 self-center gap-1 rounded-[6px] hover:bg-[#0d2133] hover:text-white hover:cursor-pointer shadow-2xl hover:scale-[1.2] transition-[1s]'>Download Resume</button>
        </motion.div>
      </motion.div>
      <div className='border-b border-black/30 w-full max-w-7xl mx-auto'></div>
    </>
  )
}

export default Header