import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = ({navItem, href}) => {
  return (
      <li className='inline-block mx-4 font-bold text-[15px] text-[#9E9AA8] hover:text-[#34313D] transition-all'>
        <Link to={href}>{navItem}</Link>
      </li>
  )
}

export default NavItem