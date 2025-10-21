import React from 'react'
import logo from '../assets/logo.js'
import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FontAwesomeLayers } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'motion/react'

const Projects = () => {
  return (
    <>
      <div className='mt-5 flex flex-col justify-center gap-10 mb-10 py-20 px-4 sm:px-6 lg:px-8'>
        {/* Section Title */}
        <motion.div 
          initial={{opacity:0.2, y:100}}
          transition={{duration:1}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          className='text-4xl md:text-5xl font-light self-center gap-1 text-center'
        >
          <span className='text-[#947272]'>P</span>
          <span className='text-[#102A43]'>rojects</span>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          initial={{opacity:0.2, x:100}}
          transition={{duration:1}}
          whileInView={{opacity:1, x:0}}
          viewport={{once:true}}
          className='flex flex-row flex-wrap gap-8 justify-center mx-auto max-w-7xl p-4'
        >
          {/* Project Card 1 */}
          <motion.div
            initial={{opacity:0, x:-20}}
            animate={{opacity:1, x:0}}
            transition={{delay:0.1, duration:0.5}}
            className='flex flex-col bg-gradient-to-r from-[#D6A4A4] to-[#cddbff] text-black rounded-lg hover:shadow-2xl w-full sm:w-80 lg:w-80 transition-all hover:scale-[1.02] duration-300 ease-in-out overflow-hidden'
          >
            <div className='flex flex-col'>
              <img 
                src={logo.Pro1} 
                className="w-full h-48 object-cover" 
                alt="AI chatbot Platform"
              />
              <div className='flex flex-row items-center justify-center py-3'>
                <div className='flex flex-row gap-3 justify-center items-center'>
                  <a 
                    href="https://github.com/bhavyagithub05/Grand_AI" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='transition-all hover:scale-110 duration-150 ease-in-out text-lg'
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a 
                    href="https://bhavyagithub05.github.io/Grand_AI/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='transition-all hover:scale-110 duration-150 ease-in-out text-lg'
                  >
                    <FontAwesomeIcon icon={faSquareArrowUpRight} />
                  </a>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-4 p-6'>
              <h3 className='text-xl font-semibold'>Grand AI - AI Chatbot</h3>
              <p className='text-sm leading-relaxed'>
                A web-based AI study assistant built with HTML, CSS, and JavaScript. Features include AI-generated responses via Google Gemini API, media and emoji support, and an interactive chat-like interface.
              </p>
              <div className='flex flex-row flex-wrap gap-2'>
                <span className='bg-white px-3 py-1 rounded-full text-xs font-medium'>HTML5</span>
                <span className='bg-white px-3 py-1 rounded-full text-xs font-medium'>CSS3</span>
                <span className='bg-white px-3 py-1 rounded-full text-xs font-medium'>JavaScript</span>
                <span className='bg-white px-3 py-1 rounded-full text-xs font-medium'>Gemini API</span>
              </div>
            </div>
          </motion.div>

          {/* Project Card 2 */}
          <motion.div 
            initial={{opacity:0, x:-20}}
            animate={{opacity:1, x:0}}
            transition={{delay:0.2, duration:0.5}}
            className='flex flex-col bg-gradient-to-r from-[#D6A4A4] to-[#cddbff] text-black rounded-lg hover:shadow-2xl w-full sm:w-80 lg:w-80 transition-all hover:scale-[1.02] duration-300 ease-in-out overflow-hidden'
          >
            <div className='flex flex-col'>
              <img 
                src={logo.Pro2} 
                className="w-full h-48 object-cover" 
                alt="Currency_converter App"
              />
              <div className='flex flex-row items-center justify-center py-3'>
                <div className='flex flex-row gap-3 justify-center items-center'>
                  <a 
                    href="https://github.com/bhavyagithub05/ConvertCaddy/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='transition-all hover:scale-110 duration-150 ease-in-out text-lg'
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a 
                    href="https://convertcaddy.onrender.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='transition-all hover:scale-110 duration-150 ease-in-out text-lg'
                  >
                    <FontAwesomeIcon icon={faSquareArrowUpRight} />
                  </a>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-4 p-6'>
              <h3 className='text-xl font-semibold'>ConvertCaddy</h3>
              <p className='text-sm leading-relaxed'>
                A simple and responsive currency converter built with React and TailwindCSS. Features include real-time exchange rate fetching, dynamic currency selection, and instant conversion results.
              </p>
              <div className='flex flex-row flex-wrap gap-2'>
                <span className='bg-white px-3 py-1 rounded-full text-xs font-medium'>React</span>
                <span className='bg-white px-3 py-1 rounded-full text-xs font-medium'>TailwindCSS</span>
                <span className='bg-white px-3 py-1 rounded-full text-xs font-medium'>CurrencyConverter API</span>
              </div>
            </div>
          </motion.div>

          {/* Project Card 3 */}
          <motion.div 
            initial={{opacity:0, x:-20}}
            animate={{opacity:1, x:0}}
            transition={{delay:0.2, duration:0.5}}
            className='flex flex-col bg-gradient-to-r from-[#D6A4A4] to-[#cddbff] text-black rounded-lg hover:shadow-2xl w-full sm:w-80 lg:w-80 transition-all hover:scale-[1.02] duration-300 ease-in-out overflow-hidden'
          >
            <div className='flex flex-col'>
              <img 
                src={logo.Pro3} 
                className="w-full h-48 object-cover" 
                alt="Currency_converter App"
              />
              <div className='flex flex-row items-center justify-center py-3'>
                <div className='flex flex-row gap-3 justify-center items-center'>
                  <a 
                    href="https://github.com/bhavyagithub05/Imagify" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='transition-all hover:scale-110 duration-150 ease-in-out text-lg'
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a 
                    href="https://imagify-frontend-ru3h.onrender.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='transition-all hover:scale-110 duration-150 ease-in-out text-lg'
                  >
                    <FontAwesomeIcon icon={faSquareArrowUpRight} />
                  </a>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-4 p-6'>
              <h3 className='text-xl font-semibold'>Imagify</h3>
              <p className='text-sm leading-relaxed'>
                A creative and responsive AI image generator built with React and MERN stack. Features include text-to-image conversion, image gallery, and cloud-based processing using modern AI APIs.
              </p>
              <div className='flex flex-row flex-wrap gap-2'>
                <span className='bg-white px-3 py-1 rounded-full text-xs font-medium'>React</span>
                <span className='bg-white px-3 py-1 rounded-full text-xs font-medium'>TailwindCss</span>
                <span className='bg-white px-3 py-1 rounded-full text-xs font-medium'>NodeJS</span>
                <span className='bg-white px-3 py-1 rounded-full text-xs font-medium'>ExpressJS</span>
                <span className='bg-white px-3 py-1 rounded-full text-xs font-medium'>Mongodb</span>
                <span className='bg-white px-3 py-1 rounded-full text-xs font-medium'>ClipDrop API</span>
              </div>
            </div>
          </motion.div>

          {/* Project Card 4 */}
          <motion.div 
            initial={{opacity:0, x:-20}}
            animate={{opacity:1, x:0}}
            transition={{delay:0.3, duration:0.5}}
            className='flex flex-col bg-gradient-to-r from-[#D6A4A4] to-[#cddbff] text-black rounded-lg hover:shadow-2xl w-full sm:w-80 lg:w-80 transition-all hover:scale-[1.02] duration-300 ease-in-out overflow-hidden'
          >
            <div className='flex flex-col'>
              <img 
                src={logo.Pro4} 
                className="w-full h-48 object-cover" 
                alt="Tik-tak-Toe Game"
              />
              <div className='flex flex-row items-center justify-center py-3'>
                <div className='flex flex-row gap-3 justify-center items-center'>
                  <a 
                    href="https://github.com/bhavyagithub05/Tik_Tak_Toe" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='transition-all hover:scale-110 duration-150 ease-in-out text-lg'
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a 
                    href="https://bhavyagithub05.github.io/Tik_Tak_Toe/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='transition-all hover:scale-110 duration-150 ease-in-out text-lg'
                  >
                    <FontAwesomeIcon icon={faSquareArrowUpRight} />
                  </a>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-4 p-6'>
              <h3 className='text-xl font-semibold'>Tik Tak Toe</h3>
              <p className='text-sm leading-relaxed'>
                A classic Tic-Tac-Toe game built with HTML, CSS, and JavaScript. Features include interactive UI, player turn logic, win/draw detection, and game reset functionality.
              </p>
              <div className='flex flex-row flex-wrap gap-2'>
                <span className='bg-white px-3 py-1 rounded-full text-xs font-medium'>HTML</span>
                <span className='bg-white px-3 py-1 rounded-full text-xs font-medium'>CSS</span>
                <span className='bg-white px-3 py-1 rounded-full text-xs font-medium'>JavaScript</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <div className='border-b border-black/30 w-full max-w-4xl mx-auto'></div>
    </>
  )
}

export default Projects