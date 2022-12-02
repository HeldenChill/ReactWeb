import React,{useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faB,faTimes,faBars} from '@fortawesome/free-solid-svg-icons'
import './Navbar.css';
import { Link } from 'react-router-dom'
import Button from './Button'

const Navbar = () => {
  const [click,setClick] = useState(false);
  const [button,setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () =>{
    if(window.innerWidth <= 960){
      setButton(false);
    }
    else{
      setButton(true);
    }
  };

  useEffect(() => {showButton()},[])

  window.addEventListener('resize', showButton);

  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
              <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                TRVL <FontAwesomeIcon icon = {faB} />
              </Link>
              <div className='menu-icon' onClick={handleClick}>
                <FontAwesomeIcon icon={click ? faTimes : faBars} />
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                  <Link to ='/home' className='nav-links' onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to ='/services' className='nav-links' onClick={closeMobileMenu}>
                    Services
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to ='/products' className='nav-links' onClick={closeMobileMenu}>
                    Products
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to ='/sign-in' className='nav-links' onClick={closeMobileMenu}>
                    Sign In
                  </Link>
                </li>
                <div className='nav-button'>
                  <Button buttonStyle='btn--outline' buttonSize='btn-medium'> SIGN UP</Button>
                </div>
                
              </ul>
              
            </div>
        </nav>
    </>
  )
}

export default Navbar