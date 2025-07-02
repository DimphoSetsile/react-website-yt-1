import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {Button} from "./Button";




function Navbar(){
    const [click, setClick]= useState(false);
    const [button, setButton] = useState(true);
    //declaring handle
    const handleClick =() => setClick(!click);
    const closeMobileMenu =() => setClick(false);

    const showButton =() =>{
        if(window.innerWidth <= 960){
            setButton(false);
        }
        else{
            setButton(true);
        }
        
    };
    
    window.addEventListener('resize',showButton);

    useEffect(()=>{
        showButton()
    },[]);

    return(
        <>
        <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo">
            
            Psychological thriller hub  <i classname='fab fa-book' />
            </Link>
            {/* when you click the menu icon, it shows the menu bars content*/}
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times': 'fas fa-bars'} > </i>
                
            </div>
            <ul className={click ? 'nav-menu active': 'nav-menu'}>
                {/*on click menu closes and redirects to link */}
                <li className='nav-item'>
                    <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                     Home
                    </Link>

                </li>
                {/*on click menu closes and redirects to link*/}
                <li className='nav-item'>
                    <Link to='/sevices' className='nav-links' onClick={closeMobileMenu}>
                     services
                    </Link>

                </li>
                {/*on click menu closes and redirects */}
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
          {button && <Button buttonStyle>SIGN UP</Button>}
        </div>
        </nav>
        </>
    )
}
export default Navbar;
