import React from 'react'
import { Link } from 'react-router-dom'

const FooterNavList = ({ title, text1, text2, text3, text4 }) => {
    return (
        <ul className='text-center lg:text-left lg:mt-auto mt-10'>
            <h4 className='text-[16px] font-bold '>{title}</h4>
            <li className='text-[#BFBFBF] font-medium my-5 hover:text-[#2BD0D0] transition-all' >
                <Link className='block'>{text1}</Link>
            </li>
            <li className='text-[#BFBFBF] font-medium my-5 hover:text-[#2BD0D0] transition-all' >
                <Link className='block'>{text2}</Link>
            </li>
            <li className='text-[#BFBFBF] font-medium my-5 hover:text-[#2BD0D0] transition-all' >
                <Link className='block'>{text3}</Link>
            </li>
            <li className='text-[#BFBFBF] font-medium my-5 hover:text-[#2BD0D0] transition-all' >
                <Link className='block'>{text4}</Link>
            </li>
        </ul>
    )
}

export default FooterNavList