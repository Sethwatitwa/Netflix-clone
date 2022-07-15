import React, { useEffect } from 'react'
import './Nav.css'

function Nav() {
    window.addEventListener("scroll", () => {
        
    })

    useEffect(() => {

    }, []);
    
  return (
    <div className='nav'>
        <img 
        className='nav__logo'
        src='https://www.freepnglogos.com/uploads/netflix-logo-0.png'
        alt='Netflix Logo'
        />

<img 
        className='nav__logo'
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
        alt='Netflix Logo'
        />


    </div>
  )
}

export default Nav