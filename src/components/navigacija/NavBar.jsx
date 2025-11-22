import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
const NavBar = () => {
  return (
    <div className='nav-bar'>
        <div className="levo-nav-bar">
            <img src="../../images/tooth2.png" alt="Logo" />
            <h2>Zubarski Centar</h2>
        </div>
        <nav>
            <ul className='lista-nav-bar'>
                <li>
                    <Link to="/">Početna</Link>
                </li>
                <li>
                    <Link to="/services">Usluge</Link>  
                </li>
                
            </ul>
        </nav>
        <div className="desno-nav-bar">
            <button className="dugme-nav-bar">Zakažite pregled</button>
        </div>


    </div>
  )
}

export default NavBar