import React from 'react'
import { assets, plans } from '../assets/assets'

export const BuyCredit = () => {
  return (
    <div className='min-h-[80vh] text-center pt-14 mb-10 '>
      <button className='border border-gray-400 px-10 py-2 mb-6 rounded-full'>Our Plans</button>
      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4  font-semibold bg-gradient-to-r from-gray-800 to-gray-400 bg-clip-text text-transparent mb-10 '>Choose the plan that's right for you</h1>
        <div className='flex flex-wrap justify-center text-left gap-6'>
          {plans.map((item,index)=>(
            <div className='bg-white rounded-lg py-12 px-8 drop-shadow-sm text-gray-800 ' key={index}>
              <img width={40} src={assets.logo_icon} alt="" />
              <p className='font-semibold mt-3'>{item.id}</p>
              <p className='text-sm'>{item.desc}</p>
              <p className='mt-6'>
                <span className='text-2xl font-medium'>${item.price}</span>/{item.credits} credits
              </p>
              <button className='w-full bg-gray-800 text-white mt-8 rounded-md text-sm py-2.5 min-w-52 hover:scale-105 transition-all duration-500'>Purchase</button>

            </div>
          ))}
        </div>
      
    </div>
  )
}
