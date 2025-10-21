import React from 'react'
import {motion as Motion} from 'framer-motion'

function Contact() {
    const handleSubmit = () => {
        if (document.getElementById("name").value === "" ||
            document.getElementById("email").value === "" ||
            document.getElementById("message").value === "") {
            alert("Please fill in all fields.");
        } else {
            alert("Your message has been sent successfully!");
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
        }
    }
  return (
    <div id='contact'>
      <Motion.div
      key="contact"
      initial={{opacity:0, y:-100}}
      whileInView={{opacity:1, y:0}}
      transition={{delay:0.7, duration:0.7, ease:"easeOut"}}
      viewport={{once:true, amount:0.6}}>
        <h1 className='text-5xl font-semibold ms-20 border-s-6 border-sky-500/100 ps-5'>Contact</h1>
      </Motion.div>
      <Motion.div
        key="form"
        initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0}}
        transition={{delay:0.5, duration:0.7, ease:"easeOut"}}
        viewport={{once:true, amount:0.6}}
      className='bg-gray-800 p-5 rounded-lg flex flex-col space-y-4 m-10 md:m-20 md:mx-35'>
        <div className='p-2 rounded-lg flex flex-col space-y-4'>
            <label className='text-xl font-semibold' htmlFor="name">Name:</label>
            <input placeholder='Enter your name...' className='bg-gray-700 p-2 rounded-lg h-13 text-md' type="text" id="name" name="name" />
        </div>
        <div className='p-2 rounded-lg flex flex-col space-y-4'>
            <label className='text-xl font-semibold' htmlFor="email">Email:</label>
            <input placeholder='Enter your email...' className='bg-gray-700 p-2 rounded-lg h-13 text-md' type="email" id="email" name="email" />
        </div>
        <div className='p-2 rounded-lg flex flex-col space-y-4'>
            <label className='text-xl font-semibold' htmlFor="message">Message:</label>
            <textarea placeholder='Enter your message...' className='bg-gray-700 p-2 rounded-lg h-30 resize-none text-md' id="message" name="message" />
        </div>
        <div className='justify-center relative'>
            <button className='bg-blue-500 text-white p-2 rounded-lg px-2.5 ms-2 hover:scale-105 transition-transform duration-300' type="submit" onClick={handleSubmit}>Send Message</button>
        </div>
        </Motion.div>
    </div>
  )
}

export default Contact
