import React from 'react'
import ChatBot from '../assets/chatbot.png'
import {motion as Motion} from 'framer-motion'

function Project() {
  return (
    <div>
      <section className='flex flex-col p-5 py-20 justify-center' id='project'>
        <div className='w-1/4'>
          <Motion.div
          key="projects-title"
          initial={{opacity:0, x:-100}}
          whileInView={{opacity:1, x:0}}
          transition={{delay:0.5, duration:0.7, ease:"easeOut"}}
          viewport={{once:true, amount:0.6}}
           className='flex justify-center pb-10'>
            <h1 className='text-5xl mb-6 font-semibold border-s-6 border-sky-500/100 ps-5 ms-10'>Projects</h1>
          </Motion.div>
        </div>
        <div className='flex flex-wrap justify-between w-full'>
          <Motion.div
          key="project-box"
          initial={{opacity:0, y:100}}
          whileInView={{opacity:1, y:0}}
          transition={{delay:0.4, duration:0.7, ease:"easeOut"}}
          viewport={{once:true, amount:0.6}}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10 w-full'>
            <div className='flex flex-col w-[350px] border border-gray-100 rounded-2xl p-5 hover:scale-105 transition-transform duration-300 bg-[#0f172a]'>
              <img
                className='h-[250px] w-full object-contain border border-gray-100 rounded-2xl p-2'
                src={ChatBot}
                alt='Chatbot project'
              />
              <div>
                <p className='p-4 font-semibold mt-2 text-gray-200'>
                  An AI Chatbot built with Python that interacts with you
                  friendly using local slang.
                </p>
                <button className='bg-sky-700 p-2 m-3 rounded-md text-white hover:bg-sky-600'>
                  View Project
                </button>
              </div>
            </div>
            <div className='flex flex-col w-[350px] border border-gray-100 rounded-2xl p-5 hover:scale-105 transition-transform duration-300 bg-[#0f172a]'>
              <img
                className='h-[250px] w-full object-contain border border-gray-100 rounded-2xl p-2'
                src={ChatBot}
                alt='Chatbot project'
              />
              <div>
                <p className='p-4 font-semibold mt-2 text-gray-200'>
                  An AI Chatbot built with Python that interacts with you
                  friendly using local slang.
                </p>
                <button className='bg-sky-700 p-2 m-3 rounded-md text-white hover:bg-sky-600'>
                  View Project
                </button>
              </div>
            </div>

            <div className='flex flex-col w-[350px] border border-gray-100 rounded-2xl p-5 hover:scale-105 transition-transform duration-300'>
              <img
                className='h-[250px] w-full object-contain border border-gray-100 rounded-2xl p-2'
                src={ChatBot}
                alt='Chatbot project'
              />
              <div>
                <p className='p-4 font-semibold mt-2 text-gray-200'>
                  An AI Chatbot built with Python that interacts with you
                  friendly using local slang.
                </p>
                <button className='bg-sky-700 p-2 m-3 rounded-md text-white hover:bg-sky-600'>
                  View Project
                </button>
              </div>
            </div>
          </Motion.div>
        </div>
      </section>
    </div>
  )
}

export default Project
