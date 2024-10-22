import React from 'react'
import HeroContent from '../sub/HeroContent'

const Hero = () => {
  return (
    <div className='relative flex flex-col h-full w-full'>
      <video
        autoPlay
        muted
        loop
        className=' w-full h-full absolute object-cover top-[-340px] left-0 z-[1] '
      >
        <source src='/bg.mp4' type='video/mp4' />
      </video>
      <HeroContent />
    </div>
  )
}

export default Hero
