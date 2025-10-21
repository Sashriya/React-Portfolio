import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
import {motion as Motion} from "framer-motion"


function Header() {
  const [MobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <>
    <Motion.div
    key="intro"
    initial={{opacity:0, x:100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{duration: 1.2, ease: "easeOut"}}
    viewport={{ once: true, amount: 0.5 }}
    >
        <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
          <h1 className="text-3xl font-bold"><i className="fas fa-briefcase">Portfolio</i></h1>
          <nav className='hidden md:block'>
            <Motion.div
              key="item"
              initial={{opacity:0, x:100}}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{delay:1.5, duration:1.2, ease: "easeOut"}}
              viewport={{ once: true, amount: 0.5 }}
              > 
              <ul className="flex space-x-4">
                <li className='text-xl text-white hover:scale-110 transition-transform duration-200 hover:text-sky-500/100'><a href="#hero">Home</a></li>
                <li className='text-xl text-white hover:scale-110 transition-transform duration-200 hover:text-sky-500/100'><a href="#about">About</a></li>
                <li className='text-xl text-white hover:scale-110 transition-transform duration-200 hover:text-sky-500/100'><a href="#project">Projects</a></li>
                <li className='text-xl text-white hover:scale-110 transition-transform duration-200 hover:text-sky-500/100'><a href="#skills">Skills</a></li>
                <li className='text-xl text-white hover:scale-110 transition-transform duration-200 hover:text-sky-500/100'><a href="#contact">Contact</a></li>
              </ul>
            </Motion.div>
          </nav>
          {MobileNavOpen && <nav className='block md:hidden absolute overflow-x-hidden'>
            <ul onClick={() => setMobileNavOpen(!MobileNavOpen)} className="flex flex-col space-y-2 mobile-nav">
              <li className='text-xl text-white hover:text-sky-500/100'><a href="#hero">Home</a></li>
              <li className='text-xl text-white hover:text-sky-500/100'><a href="#about">About</a></li>
              <li className='text-xl text-white hover:text-sky-500/100'><a href="#project">Projects</a></li>
              <li className='text-xl text-white hover:text-sky-500/100'><a href="#skills">Skills</a></li>
              <li className='text-xl text-white hover:text-sky-500/100'><a href="#contact">Contact</a></li>
            </ul>
          </nav>}
          <button className='block md:hidden' onClick={() => setMobileNavOpen(!MobileNavOpen)}><Bars3Icon className="h-6 w-6" /></button>
        </header>
        <hr className="border-gray-300" />
      </Motion.div>
    </>
  )
}

export default Header
