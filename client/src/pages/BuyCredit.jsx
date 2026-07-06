import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@clerk/clerk-react'
import { toast } from 'react-toastify'
import axios from 'axios'

export const BuyCredit = () => {

  const { backend, loadCreditsData } = useContext(AppContext)

  const navigate = useNavigate()

  const { getToken } = useAuth()

  const initPay = async (order) =>{

    const options = {
        key : import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount : order.amount,
        currency : order.currency,
        name: 'Credits Payment',
        description: "Credits Payment",
        order_id: order.id,
        receipt: order.receipt,
        handler: async (response) =>{
          console.log(response)


          const token = await getToken()

          try {

            const { data } = await axios.post(backend + '/api/user/verify-razor',response,{headers:{token}})
            if(data.succes){
                loadCreditsData()
                navigate('/')
                toast.success('Credit Added')
            }
          } catch (error) {
            console.log("BuyCredits initpay Failed:",error);
            toast.error(error.message)
            
          }

        }
    }

    const rzp = new window.Razorpay(options)
    rzp.open()

  }

  const paymentRazorpay = async (planId) =>{
    try {

        const token = await getToken()
        const { data } = await axios.post(backend+'api/user/pay-razor',{planId},{headers:{token}})
        if(data.succes){
          initPay(data.order)
        }

    } catch (error) {
        console.log(error);
        toast.error(error.message)
    }
  }





  return (
    <div className='min-h-[80vh] text-center pt-14 mb-10 '>
      <button className='border border-gray-400 px-10 py-2 mb-6 rounded-full'>Our Plans</button>
      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4  font-semibold bg-gradient-to-r from-gray-800 to-gray-400 bg-clip-text text-transparent mb-10 '>Choose the plan that's right for you</h1>
      <div className='flex flex-wrap justify-center text-left gap-6'>
        {plans.map((item, index) => (
          <div className='bg-white rounded-lg py-12 px-8 drop-shadow-sm text-gray-800 ' key={index}>
            <img width={40} src={assets.logo_icon} alt="" />
            <p className='font-semibold mt-3'>{item.id}</p>
            <p className='text-sm'>{item.desc}</p>
            <p className='mt-6'>
              <span className='text-2xl font-medium'>${item.price}</span>/{item.credits} credits
            </p>
            <button onClick={()=>paymentRazorpay(item.id)} className='w-full bg-gray-800 text-white mt-8 rounded-md text-sm py-2.5 min-w-52 hover:scale-105 transition-all duration-500'>Purchase</button>

          </div>
        ))}
      </div>

    </div>
  )
}
