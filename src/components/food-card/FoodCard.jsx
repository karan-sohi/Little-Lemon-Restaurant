import React from 'react'
import './FoodCard.css'

const FoodCard = ({food}) => {
  const {name, price, image, description} = food;
  return (
    <div className='food-card flex flex-col'>
      <img src={image} alt={name} className='w-full mx-auto mb-2' />
      <div className='px-4'>
        <div className='flex items-center justify-between'>
          <h2 className='font-bold text-xl mb-2'>{name}</h2>
          <h4 className='font-medium text-lg'>{price}</h4>
        </div>
        <p className='text-justify text-sm mb-2'>{description}</p>
        <button className='font-bold'>Order a delivery</button>
      </div>
    </div>
  )
}

export default FoodCard