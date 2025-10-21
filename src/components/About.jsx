import React from 'react'
import Girl from '../assets/cute.png'
import {motion as Motion} from 'framer-motion'

function About() {
  return (
    <Motion.section
    key="about"
    initial={{opacity:0, y:-100}}
    whileInView={{opacity:1, y:0}} 
    transition={{delay:0.5, duration:0.7, ease:"easeOut"}}
    viewport={{once:true, amount:0.6}}
    className='flex flex-col md:flex-row bg-gray-900 md:bg-gray-900 text-white p-4' id='about'>
        <div className='md:w-1/2 hidden md:block'>
            <img src={Girl} />
        </div>
        <div className='md:w-1/2 flex justify-center md:p-1'>
            <div className='flex flex-col justify-center'>
                <h1 className='text-5xl mb-6 font-semibold border-s-6 border-sky-500/100 ps-5'>About Me</h1>
                <p className='text-xl me-1 md:me-12 p-2 md:p-1'>I’m a passionate software developer focused on building clean, user-friendly digital experiences. With strengths in both front-end development, I create platforms that are functional, intuitive, and visually engaging. My recent projects include a cloth donation website connecting donors to communities in need an initiative that reflects my commitment to using tech for social good. Beyond coding, I explore photography and design (InDesign) bringing a creative eye to every project.</p>            
            </div>
        </div>
    </Motion.section>
  )
}

export default About
