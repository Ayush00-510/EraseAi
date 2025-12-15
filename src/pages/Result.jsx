import React from 'react'
import { assets } from '../assets/assets'

export const Result = () => {
  return (
    <div className='mx-4 my-3 lg:mx-44 mt-14 min-h-[75vh]'>
      <div className=' bg-white rounded-lg drop-shadow-sm px-10 py-4'>

        
          {/* ----------------Image Container--------------- */}
          <div className='flex flex-col sm:grid grid-cols-2 gap-10'>

              {/* --------------Left side -- Original--------- */}
              <div >
                <p className='font-semibold text-gray-600 mb-2'>Original</p>
                <img className='rounded-md drop-shadow-sm ' src={assets.image_w_bg} alt="" />
              </div>
              
              {/* --------------Right side - Result----------- */}
              <div className='flex flex-col'>
                <p className=' font-semibold text-gray-600 mb-2'>Without Background</p>
                <div className='rounded-md h-full border border-gray-300 relative bg-layer overflow-hidden'>
                  <img  src={assets.image_wo_bg} alt="" />
                  {/* <div className='absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2'>
                    <div className='border-4 border-violet-400 rounded-full h-12 w-12 border-t-transparent animate-spin'>

                    </div>
                  </div> */}
                </div>
              </div>

          </div>

          {/* -------------------------Button---------------------- */}
          <div className='flex justify-center sm:justify-end flex-wrap gap-4 mt-6 '>
            <button className='px-8 py-2.5 text-violet-600 text-sm border border-violet-700 rounded-full hover:scale-105 transition-all duration-700'>Try another image</button>
            <a className='px-8 py-2.5 text-white text-sm bg-gradient-to-r from-violet-600 to-fuchsia-400 rounded-full hover:scale-105 transition-all duration-700' href="">Download image</a>

          </div>

        
      </div>

    </div>
  )
}
