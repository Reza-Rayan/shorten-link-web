import React from 'react'
import { Link } from 'react-router-dom'

const Prefooter = () => {
  return (
    <div className='bg-[#3A3054] text-white text-center py-20 prefooterBg'>
      <h4 className='lg:text-[40px] text-[28px] font-bold mb-10'>Boost your links today  </h4>
      <Link
        to={"#"}
        className="mainBg  border-[#2BD0D0]  rounded-full  md:rounded-3xl font-bold px-8 py-4 text-[20px]   text-center 
           hover:bg-[#9AE3E3] transition-all "
      >
        Get Started
      </Link>
    </div>
  )
}

export default Prefooter