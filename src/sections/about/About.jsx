import React from 'react'
import about_img from '../../img/Mario and Adrian A.jpg'
import './About.css'

const About = () => {
  return (
    <section className='about-section flex flex-col md:flex-row justify-center p-5'>        
      <div className='w-[80%] lg:w-[40%] mx-7 my-3'>
        <h1 className='font-bold text-5xl'>About Little Lemon</h1>
        <h2 className='font-medium text-lg'>Chicago</h2>
        <p className='text-lg'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit 
          officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet 
          minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis 
          enim velit mollit.</p>
      </div>

      <div className='about-img'>
        <img src={about_img} alt="Mario and Adrian" />
      </div>
    </section>
  )
}

export default About