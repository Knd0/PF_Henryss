import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

function NavBar() {
  return (
    <nav>
      <ul>
        <div>
            <Link exact to="/">
                <button className='navbar-button'>Home</button>
            </Link>
        </div>
        <div>
            <Link to="/cars">
                <button className='navbar-button'>Cars</button>
            </Link>
        </div>
        <div>
            <Link to="/aboutus">
                <button className='navbar-button'>About Us</button>
            </Link>
        </div>
        <div>
            <Link to="/login">
             <button className='navbar-button'>Login</button>
             </Link>
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;

