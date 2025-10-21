import React from 'react'
import Profile from '../assets/laptop.png'
import { FaSquareInstagram, FaLinkedin  } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import {motion as Motion} from 'framer-motion';

function Hero() {
  return (
    <>
        <Motion.div
        key="hero"
        initial={{opacity:0, x:-150}}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{delay:1.5, duration:0.7, ease: "easeOut"}}
        viewport={{ once: true, amount: 0.5 }}
        >
            <section className='flex flex-col md:flex-row px-3 py-28 bg-gray-900 text-white justify-center' id='hero'>
                <div className='md:w-1/2 flex flex-col'>
                    <h1 className='text-5xl m-4 font-mono'>Hi, <br /> I am Sashriya M
                        <p className='text-2xl pt-4'>
                            <TypeAnimation sequence={[
                                'I am a Web Developer', 2000,
                                'I am a App Developer', 2000,
                                'I am a AI Engineer', 2000,
                                'I am a Video Editor', 2000,
                                'I am a Creative Designer', 2000,
                            ]}
                            wrapper='span'
                            speed={50}
                            repeat={Infinity}
                            />
                        </p>
                    </h1> 
                    <p className='text-xl ps-4 me-4 md:me-25'>I'm a Student at KSR Institute for Engineering and Technology and currently pursuing Computer Science Engineering and I am passionate developer who blends creativity with code. I love building user-friendly websites, writing stories, and capturing moments through photography.</p>
                    <div className='flex space-x-4 ms-4 pt-6'>  
                        <a href="https://www.instagram.com/_sashrii_2005_/" className='hover:text-sky-500/100 hover:scale-110 transition-transform duration-300'><FaSquareInstagram size={40}/></a>
                        <a href="https://github.com/Sashriya" className='hover:text-sky-500/100 hover:scale-110 transition-transform duration-300'><FaGithubSquare size={40}/></a>
                        <a href="http://linkedin.com/in/sashriya-m-b2013a296" className='hover:text-sky-500/100 hover:scale-110 transition-transform duration-300'><FaLinkedin size={40}/></a>
                    </div>
                </div>
                <Motion.img 
                key="image"
                initial={{opacity:0, x:150}}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{delay:1.5, duration:0.5, ease: "easeOut"}}
                viewport={{ once: true, amount: 0.5 }}
                className='md:w-1/3' src={Profile} />
            </section>
        </Motion.div>
    </>
  )
}

export default Hero
