import React from 'react'
import ChatBot from '../assets/chatbot.png'
import Hope from '../assets/hopefoundation.png'
import Eye from '../assets/eyecursor.png'
import Vendor from '../assets/vendorconnect.png'
import Mentor from '../assets/menterhub.png'
import Eco from '../assets/ecoplastic.png'
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
                src={Vendor}
                alt='Vendor project'
              />
              <div>
                <p className='p-4 font-semibold mt-2 text-gray-200'>
                  Vendor Connect - A web application that connects local vendors
                  with customers in their area.
                </p>
                <button className='bg-sky-700 p-2 m-3 rounded-md text-white hover:bg-sky-600'>
                  <a href="https://vender-connect.vercel.app/" target="_blank" rel="noopener noreferrer">View Project</a>
                </button>
              </div>
            </div>
            <div className='flex flex-col w-[350px] border border-gray-100 rounded-2xl p-5 hover:scale-105 transition-transform duration-300 bg-[#0f172a]'>
              <img
                className='h-[250px] w-full object-contain border border-gray-100 rounded-2xl p-2'
                src={Mentor}
                alt='Mentor Hub project'
              />
              <div>
                <p className='p-4 font-semibold mt-2 text-gray-200'>
                  Mentor Hub - A platform that connects students with mentors
                  for guidance and support.
                </p>
                <button className='bg-sky-700 p-2 m-3 rounded-md text-white hover:bg-sky-600'>
                  <a href="https://github.com/Sashriya/MentorHub" target="_blank" rel="noopener noreferrer">View Project</a>
                </button>
              </div>
            </div>
            <div className='flex flex-col w-[350px] border border-gray-100 rounded-2xl p-5 hover:scale-105 transition-transform duration-300 bg-[#0f172a]'>
              <img
                className='h-[250px] w-full object-contain border border-gray-100 rounded-2xl p-2'
                src={Eco}
                alt='Eco Plastic Innovators project'
              />
              <div>
                <p className='p-4 font-semibold mt-2 text-gray-200'>
                  Eco Plastic Innovators - A project focused on recycling plastic waste
                  and promoting sustainable practices in homes.
                </p>
                <button className='bg-sky-700 p-2 m-3 rounded-md text-white hover:bg-sky-600'>
                  <a href="https://eco-plastic-innovators.vercel.app/" target="_blank" rel="noopener noreferrer">View Project</a>
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
                  MR. Mechano - An AI Chatbot built with Python that interacts
                  with you friendly using local slang.
                </p>
                <button className='bg-sky-700 p-2 m-3 rounded-md text-white hover:bg-sky-600'>
                  <a href="https://github.com/Sashriya/Mr.Mechano" target="_blank" rel="noopener noreferrer">View Project</a>
                </button>
              </div>
            </div>
            <div className='flex flex-col w-[350px] border border-gray-100 rounded-2xl p-5 hover:scale-105 transition-transform duration-300 bg-[#0f172a]'>
              <img
                className='h-[250px] w-full object-contain border border-gray-100 rounded-2xl p-2'
                src={Hope}
                alt='Hope Foundation project'
              />
              <div>
                <p className='p-4 font-semibold mt-2 text-gray-200'>
                  Hope Foundation - A non-profit organization dedicated to
                  helping underprivileged children.
                </p>
                <button className='bg-sky-700 p-2 m-3 rounded-md text-white hover:bg-sky-600'>
                  <a href="https://hopefoundations.vercel.app/" target="_blank" rel="noopener noreferrer">View Project</a>
                </button>
              </div>
            </div>

            <div className='flex flex-col w-[350px] border border-gray-100 rounded-2xl p-5 hover:scale-105 transition-transform duration-300'>
              <img
                className='h-[250px] w-full object-contain border border-gray-100 rounded-2xl p-2'
                src={Eye}
                alt='Eye Cursor project'
              />
              <div>
                <p className='p-4 font-semibold mt-2 text-gray-200'>
                  Eye Cursor - A web application that helps users navigate
                  their devices using eye movements.
                </p>
                <button className='bg-sky-700 p-2 m-3 rounded-md text-white hover:bg-sky-600'>
                  <a href="https://github.com/Sashriya/DhoorDarshan" target="_blank" rel="noopener noreferrer">View Project</a>
                </button>
              </div>
            </div>
          </Motion.div>
        </div>
        <div className='flex justify-center items-center'>
          <button className='bg-sky-700 p-3 rounded-lg mt-10 text-xl font-semibold'><a href="https://github.com/Sashriya/" target="_blank" rel="noopener noreferrer">Explore Github</a></button>
        </div>
      </section>
    </div>
  )
}



export default Project
