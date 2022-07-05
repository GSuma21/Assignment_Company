import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'


const Navbar = ({click}) => {

 
  return (
  
    <nav className='navbar'>
        {/* logo */}
        <div className='navbar_logo'>
            <h2>Mern</h2>

        </div>
         {/* links */}
         <ul className='navbar_links'>
           <li>
                <Link to="/" className='cart__home'>
                  Home
                </Link>
            </li>
            <li>
                <Link to="/loginr" className="cart__link">
                  <i className='fas fa-shopping-cart'></i>
                  <span>
                   Register
                 
                  </span>
                </Link>
            </li>
            <li>
                <Link to="/loginp" className="cart__link">
                  <i className='fas fa-shopping-cart'></i>
                  <span>
                  LoginPublisher
                 
                  </span>
                </Link>
            </li>
            <li>
                <Link to="/logina" className="cart__link">
                  <i className='fas fa-shopping-cart'></i>
                  <span>
                  LoginAuthor
                  
                  </span>
                </Link>
            </li>
            
            {/* {getCartCount()} */}

           

         </ul>
         
          {/* hamburger menu */}
          <div className='hamburger_menu' onClick={click}>
            <div></div>
            <div></div>
            <div></div>

          </div>

    </nav>
    
    
   
  )
}

export default Navbar;