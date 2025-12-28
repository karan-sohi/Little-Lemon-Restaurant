import React from 'react'
import greek from '../../img/greek salad.jpg'
import bruchetta from '../../img/bruchetta.svg'
import lemon_dessert from '../../img/lemon dessert.jpg'
import FoodCard from '../../components/food-card/FoodCard'

const Specials = () => {
  const specials = [
    {
      name: "Greek Salad",
      price: "$ 12.99",
      description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons",
      image: greek
    },
    {
      name: "Bruchetta",
      price: "$ 5.99",
      description: "Our Bruschetta is made from grilled bread that has been smearede with garlic and seasonede with salt and olive oil",
      image: bruchetta
    },
    {
      name: "Lemon Dessert",
      price: "$ 5.00",
      description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined",
      image: lemon_dessert
    },
  ]

  return (
    <section>
        <div className='md:w-[80%] mx-auto flex justify-between m-3 items-center px-4'>
          <h1 className='font-bold text-3xl'>This weeks specials!</h1>
          <button className='yellow-btn'>Online Menu</button>
        </div>
        <div className='w-full sm:w-[80%] p-4 mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 justify-center'>
          {specials.map((food, index) => {
            return <FoodCard key={index} food={food} />
          })}
        </div>
    </section>
  )
}

export default Specials