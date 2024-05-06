import React from 'react'

import './navbar.css'

const StylingComponent = () => {
  return (
    <>
    <nav className='navbar'>
        <div className='logo'>
            <h2>LOGO</h2>
        </div>
        <ul className='navbar-item'>
            <li><a>Home</a></li>
            <li><a>Contact</a></li>
            <li><a>About</a></li>
        </ul>
    </nav>
    </>
  )
}

export default StylingComponent