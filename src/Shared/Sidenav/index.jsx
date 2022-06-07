import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Sidenav.scss'
function Sidenav() {
  const [isActive, setIsActive] = useState(true)
  const toggleMenu = () => {setIsActive(!isActive)}
  return (
    <>
      <div className={`toggle ${isActive ? 'active' : null}`} onClick={toggleMenu}></div>
      <div className={`sidebar ${isActive ? 'active' : null}`}>
          <ul class="menu">
              <li><Link to='/' onClick={toggleMenu}>Home</Link></li>
              <li><Link to='/about' onClick={toggleMenu}>About</Link></li>
              <li><Link to='/service' onClick={toggleMenu}>Services</Link></li>
              <li><a href="">Work</a></li>
              <li><a href="">Contact</a></li>
          </ul>
      </div>
    </>
  )
}

export default Sidenav