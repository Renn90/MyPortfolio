import React from 'react'
import StaggeredText from './UI/Staggered'
import { useContext } from 'react'
import { ScrollContexts } from '../store/ScrollContext'

const Hero = () => {
  const {homeRef} = useContext(ScrollContexts)
  return (
    <div className='text-white container h-[95vh] max-h-[1000px] flex flex-col justify-center items-start md:h-[100vh]' ref={homeRef}>
      <div className='bebas-neue text-[5vw] ml-[1.1%] xl:text-[80px] overflow-hidden duration-750'><StaggeredText text={'FRONTEND-DEVELOPER'.split('')} once={false}/></div>
      <div className='full-screen-text flex overflow-hidden duration-1000'><StaggeredText text={'FAITHFUL'.split('')} once={false}/></div>
    </div>
  )
}

export default Hero
