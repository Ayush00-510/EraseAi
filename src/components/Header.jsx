import React from 'react'
import { assets } from '../assets/assets'

export const Header = () => {
  return (
    <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20'>
        {/* -------For Left---------- */}
        <div >
            <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-700 leading-tight'>
              Remove the <br className='max-md:hidden'/> <span className='bg-gradient-to-r from-violet-600 to-violet-400 bg-clip-text text-transparent'>background  </span> from <br className='max-md:hidden'/> Image for free
            </h1>
            <p className='my-5 text-[15px] text-gray-500'>Place where you blend your ideas into creatitvity.</p>
            <div >
            <input type='file' name='' id='upload1' hidden/>
            <label className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-700 to-violet-500 m-auto hover:scale-105 transition-all duration-700' htmlFor="upload1">
                <img width={20} src={assets.upload_btn_icon} alt="" />
                <p className='text-white text-sm'>Upload Image</p>
            </label>
            </div>
        </div>
        {/* -------For Right--------- */}
        <div className='w-full max-w-md'>
            <img src={assets.header_img} alt="" />
        </div>
    </div>
  )
}
