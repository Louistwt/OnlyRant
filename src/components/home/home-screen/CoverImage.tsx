import { Heart, Image as ImageIcon, Video } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const CoverImage = () => {
  return (
    <div className='h-44 overflow-hidden relative'>
      <Image
        src={"/featured/featured10.jpg"}
        className="h-full w-full object-cover select-none pointer-events-none"
        fill
        alt="Horse Cover Image"
      />  
      <div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-800 to-transparent"
        aria-hidden="true"
      />

      <div className='flex justify-between items-center absolute top-0 left-0 px-2 z-20 w-full'>
        <div className='flex items-center gap-2'>
          <div className='flex flex-col text-white'>
            <p className='font-bold'>Testing</p>
            
            <div className='flex gap-2 items-center'>
              <div className='flex items-center gap-1'>
                <ImageIcon className='w-4 h-4' />
                <span className='text-sm font-bold'>45</span>
              </div>
              
              <span className='text-xs'>•</span>
              <div className='flex items-center gap-1'>
                <Video className='w-4 h-4' />
                <span className='text-sm font-bold'>67</span>
              </div>

              <span className='text-xs'>•</span>
              <div className='flex items-center gap-1'>
                <Heart className='w-4 h-4' />
                <span className='text-sm font-bold'>50</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
  )
}

export default CoverImage