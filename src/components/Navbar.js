import React,{useState} from 'react'
import {Link} from 'react-router-dom'


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
                <i className={click ? 'fas fa-times': 'fas fa-bars'} />
                
            </div>
            <ul className={click ? 'nav-menu active': 'nav-menu'}>
                <li className='nav-item'>
                    <link to='/home' className='nav-links' onClick={closeMobileMenu}>
                     Home
                    </link>

                </li>
                <li className='nav-item'>
                    <link to='/sevices' className='nav-links' onClick={closeMobileMenu}>
                     services
                    </link>

                </li>
                <li className='nav-item'>
                    <link to='/products' className='nav-links' onClick={closeMobileMenu}>
                     Products
                    </link>

                </li>
                <li className='nav-item'>
                    <link to='/sign-up' className='nav-links' onClick={closeMobileMenu}>
                     Sign up
                    </link>

                </li>
            </ul>
        
        </div>
        </nav>
        </>
    )
}
export default Navbar;