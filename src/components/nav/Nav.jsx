import React from 'react'
import "./Nav.css"
import { Link } from 'react-scroll'


const Nav = ({isMenuOpen, handleMenuClick}) => {

     const items = ["home", "about", "skills", "services", "portfolio", "clients", "contact"]

  return (
                <nav className={isMenuOpen ? "nav active" : "nav"}>
                    <div className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
                        {items.map((item, index) => (
                        <Link 
                        to={item}
                        key={index}
                         className='nav-link'
                         onClick={handleMenuClick}
                         >{item}</Link>
                    ))}
                    </div>

                    
                    

                    {/* <ul class="nav-menu">
                        <li class="nav-item">
                            <a href="#home" class="nav-link active">home</a>
                        </li>
                        <li class="nav-item">
                            <a href="#about" class="nav-link">About</a>
                        </li>
                        <li class="nav-item">
                            <a href="#skills" class="nav-link">Skills</a>
                        </li>
                        <li class="nav-item">
                            <a href="#services" class="nav-link">Services</a>
                        </li>
                        <li class="nav-item">
                            <a href="#portfolio" class="nav-link">Portfolio</a>
                        </li>
                        <li class="nav-item">
                            <a href="#contact" class="nav-link">Contact</a>
                        </li>
                    </ul> */}
                </nav>
  )
} 

   


export default Nav