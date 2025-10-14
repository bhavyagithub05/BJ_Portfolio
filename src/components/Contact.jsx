import React from 'react'
import { motion } from 'motion/react'
const Contact = () => {
  return (
    <div className='flex flex-col gap-10 py-20'>
      <motion.div
      initial={{opacity:0.2, y:100}}
        transition={{duration:1}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
      className='text-4xl lg:text-5xl font-light self-center gap-1'>
        <span className='text-[#947272]'>C</span>
        <span className='text-[#102A43]'>ontact</span>
      </motion.div>
      <div className='flex flex-col gap-3 py-3 px-2 justify-center items-center content-center self-center text-[15px]'>
        <motion.div
        initial={{opacity:0.2, x:100}}
        transition={{duration:1}}
        whileInView={{opacity:1, x:0}}
        viewport={{once:true}}
        
        >Vatika,Jaipur-302029</motion.div>
        <motion.div
        initial={{opacity:0.2, x:150}}
        transition={{duration:1}}
        whileInView={{opacity:1, x:0}}
        viewport={{once:true}}
        >+91-7878383814</motion.div>
        <motion.div
        initial={{opacity:0.2, x:200}}
        transition={{duration:1}}
        whileInView={{opacity:1, x:0}}
        viewport={{once:true}}
        >jainbhavya552@gmail.com</motion.div>
      </div>
    </div>
  )
}

export default Contact