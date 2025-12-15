import React from 'react'
import { assets } from '../assets/assets'

export const Steps = () => {
  return (
    <div className='mx-4 lg:mx-44 py-20 xl:py-40'>
        <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4  font-semibold bg-gradient-to-r from-gray-800 to-gray-400 bg-clip-text text-transparent ' >Steps to remove background <br /> image in seconds</h1>
        <div className='flex flex-col sm:flex-row flex-wrap items-start gap-6 mt-16 xl:mt-24 justify-center'>

            
            {/* Step:1 */}
            <div className='flex items-start gap-4 bg-white drop-shadow-md p-7 pb-10  rounded hover:scale-105 transition-all duration-500'>
                <img className='max-w-9' src={assets.upload_icon} alt="" />
                <div>                  
                <p className='text-xl font-medium'>Upload image</p>
                <p className='text-sm text-neutral-500'>Upload your image in just one click. Supported formats include JPG and PNG.</p>
                </div>
            </div>


            {/* Step:2 */}
            <div className='flex items-start gap-4 bg-white  drop-shadow-md p-7 pb-10  rounded hover:scale-105 transition-all duration-500'>
                <img className='max-w-9' src={assets.remove_bg_icon} alt="" />
                <div>                  
                <p className='text-xl font-medium'>Remove background</p>
                <p className='text-sm text-neutral-500'> Our AI automatically detects and removes the background in seconds.</p>
                </div>
            </div>


            {/* Step:3 */}
            <div className='flex items-start gap-4 bg-white drop-shadow-md p-7 pb-10  rounded hover:scale-105 transition-all duration-500'>
                <img className='max-w-9' src={assets.download_icon} alt="" />
                <div>                  
                <p className='text-xl font-medium'>Download image</p>
                <p className='text-sm text-neutral-500'> Download your high-quality image instantly with a transparent background.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
