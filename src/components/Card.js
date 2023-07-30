import React from 'react'

const Card = ({ extranclass, vector, title, text }) => {
    return (
        <article className={`mx-auto mt-20  ${extranclass} relative`}>
            <div className='bg-white w-full hover:shadow-md transition-all p-6 text-center lg:text-left md:px-12 md:py-6 rounded-md'>
                <span className='bg-[#3A3054] flex  w-[88px] h-[88px] justify-center items-center mx-auto lg:ml-0 rounded-full mt-[-70px]'>
                    <img src={vector} alt={vector} className='w-[40px] h-[40px] ' />
                </span>
                <h3 className='text-[#34313D] text-[22px] font-bold mt-10'>{title}</h3>
                <p className='flex-col text-[#9E9AA8] mt-4 text-[15px] leading-6 font-medium'>
                    {text}
                </p>
            </div>
        </article>
    )
}

export default Card