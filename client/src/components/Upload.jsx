import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext.jsx'

export const Upload = () => {

  const { removeBg } = useContext(AppContext)

  return (
    <div className='pb-16'>
        {/* Title */}
        <h1 className='mb-10 sm:mb-20 text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-800 to-gray-400 bg-clip-text text-transparent py-5 md:py-10' >See the Magic. Try Now</h1>

                    <div className='text-center mb-24' >
                    <input onChange={e => removeBg(e.target.files[0])} type='file' accept='image/*' id='upload2' hidden/>
                    <label className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-700 to-violet-500 m-auto hover:scale-105 transition-all duration-700' htmlFor="upload2">
                        <img width={20} src={assets.upload_btn_icon} alt="" />
                        <p className='text-white text-sm'>Upload Image</p>
                    </label>
                    </div>
    
    </div>
  )
}
