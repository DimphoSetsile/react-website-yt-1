import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';



function Navbar(){
    const [click, setClick]= useState(false);
    //declaring handle
    const handleClick =() => setClick(!click);
    const closeMobileMenu =() => setClick(false);
    return(
        <>
        <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo">
            Travel <i classname='fab fa-typo3' />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times': 'fas fa-bars'} > </i>
                
            </div>
            <ul className={click ? 'nav-menu active': 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                     Home
                    </Link>

                </li>
                <li className='nav-item'>
                    <Link to='/sevices' className='nav-links' onClick={closeMobileMenu}>
                     services
                    </Link>

                </li>
                <li className='nav-item'>
                    <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                     Products
                    </Link>

                </li>
                <li className='nav-item'>
                    <Link to='/sign-up' className='nav-links' onClick={closeMobileMenu}>
                     Sign up
                    </Link>

                </li>
            </ul>
        
        </div>
        </nav>
        </>
    )
}
export default Navbar;
