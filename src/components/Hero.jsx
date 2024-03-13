import React from 'react'
import StaggeredText from './UI/Staggered'

const Hero = () => {
  return (
    <div className='text-white container h-[90vh] flex flex-col justify-center items-start md:h-[100vh]'>
      <div className='bebas-neue text-[5vw] ml-[1.1%] xl:text-[80px] overflow-hidden duration-750'><StaggeredText text={'FRONTEND-DEVELOPER'.split('')}/></div>
      <div className='full-screen-text flex overflow-hidden duration-1000'><StaggeredText text={'FAITHFUL'.split('')}/></div>
    </div>
  )
}

export default Hero
