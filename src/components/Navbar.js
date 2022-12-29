import React,{useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faB,faTimes,faBars} from '@fortawesome/free-solid-svg-icons'
import './Navbar.css';
import { Link } from 'react-router-dom'
import Button from './Button'
import useAuthAccount from '../hooks/useAuthAccount';
import { AccountType } from '../features/AuthProvider';

const Navbar = () => {
  const [click,setClick] = useState(false);
  const [button,setButton] = useState(true);
  const accountState = useAuthAccount()
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
                <FontAwesomeIcon icon={click ? faTimes : faBars} color="white"/>
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                  <Link to ='/services' className='nav-links' onClick={closeMobileMenu}>
                    Services
                  </Link>
                </li>                           
                {accountState.isInAccount === true 
                ? <li className='nav-item'>
                    <Link to ='/products' className='nav-links' onClick={closeMobileMenu}>
                      Products
                    </Link>
                  </li> : null
                }                
                {accountState.accountType === AccountType.Admin 
                ? <li className='nav-item'>
                    <Link to ='/accounts' className='nav-links' onClick={closeMobileMenu}>
                      Accounts
                    </Link>
                  </li> : null
                }
                {accountState.accountType === AccountType.Seller || accountState.accountType === AccountType.Admin
                ? <li className='nav-item'>
                    <Link to ='/customers' className='nav-links' onClick={closeMobileMenu}>
                      Customers
                    </Link>
                  </li> : null
                }   
                
                <div className='nav-button'>
                  <Button 
                    link='/sign-in' 
                    buttonStyle='btn--outline' 
                    buttonSize='btn-medium'
                    onClick={handleClick}
                  > {accountState.isInAccount ? "USER" : "SIGN IN"}</Button>
                </div>              
              </ul>             
            </div>
        </nav>
      </>
  )
}

export default Navbar