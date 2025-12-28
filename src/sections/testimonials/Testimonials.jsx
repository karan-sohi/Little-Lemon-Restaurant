import React from 'react'
import TestimonialCard from '../../components/testimonial-card/TestimonialCard'
import person1 from '../../img/person1.png'
import person2 from '../../img/person2.png'
import person3 from '../../img/person3.png'
import person4 from '../../img/person4.png'
import './Testimonials.css'

const Testimonials = () => {
  const users = [
    {
      name : 'John',
      image: person1
    },
    {
      name : 'Mary',
      image: person2
    },
    {
      name : 'Joanne',
      image: person3
    },
    {
      name : 'Kim',
      image: person4
    },
  ]


  return (
    <section className='testimonials py-4 px-3'>
      <h1 className='font-bold text-4xl text-center'>Testimonials</h1>
      
      <div className='w-full p-4 m-auto grid grid-cols-2 md:grid-cols-4 gap-5 justify-center'>
        {users.map((user, index) => {
          return <TestimonialCard key={index} user={user} />
        })}
      </div>
    </section>
  )
}

export default Testimonials