import React from 'react'

const HeroSection = () => {
  return (
    <div className='flex h-screen w-full'>
      <div className='flex-1 flex overflow-hidden bg-[#00b0f0a6] relative justify-center items-center z-10'>
        <img src="/of-logo.svg" alt= "" />
      </div>

      <div className='flex-1'>
        right
      </div>
    </div>
  )
}

export default HeroSection