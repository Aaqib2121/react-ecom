import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const Nav = () => {
  const [menuIcon, setMenuIcon] = useState(false);

  const StyledNav = styled.nav`
  .navbar {
    padding: 20px;
  }
  
  .navbar-brand {
    font-size: 24px;
  }
  
  .navbar-nav .nav-link {
    font-size: 18px;
    padding-left: 20px;
  }

  @media (max-width: 991.98px) {
    .navbar {
      padding: 10px;
    }
  
    .navbar-brand {
      font-size: 20px;
    }
  
    .navbar-nav .nav-link {
      font-size: 16px;
    }
  }
  
  .navbar-lists {
    display: flex;
    gap: 4.8rem ;
    align-items : center;
    .navbar-link {
     &:link,
     &:visited {
     display: inline-block;
     text-decoration : none;
     font-size: 1.8rem;
     font-weight : 500;
     text-trans form : uppercase;
     color: ${({ theme }) => theme.colors.black} ;
     transition: color 0.3s linear;
     }

     &:hover,
     &:active {
        color: ${({ theme }) => theme.colors .helper};
     }
   }
 }

 .mobile-navbar-btn{
   display: none;
   background-color: transparent;
   cursor: pointer;
   border: none;
 }
 .mobile-nav-icon [name = "close-outline"] {
   display: none;
 }
 .close-outline {
   display: none;
 }
 .cart-trolley--link {
   position: relative;
 .cart-trolley {
   position: relative;
   font-size: 3.2rem;
 }
 .cart-total--item {
   width: 2.4rem;
   height: 2.4rem;
   position : absolute;
   background-color : #000;
   color: #fff;
   border-radius : 50%;
   display: grid;
   place-items: center;
   top:-20%;
   left: 70%;
   font-size: 13px;
   background- color : ${({ theme }) => theme.colors.helper};
 }
}

 .user-login--name {
   text-transform : capitalize;
 }
 .user-logout ,
 .user-login {
   font-size: 1.4rem;
   padding: 0.8rem 1.4rem;
 }

 @media (max-width : ${({ theme }) => theme.media.mobile}) {
 .mobile-navbar-btn {
   display: inline-block;
   z-index: 9999;
   border: ${({ theme }) => theme.colors.black};
 .mobile-nav-icon{
   font-size: 4.2rem;
   color: ${({ theme }) => theme.colors.black} ;
 }
}
 .active .mobile-nav-icon{
   display : none;
   font-size: 4.2rem;
   position : absolute;
   top: 30%;
   right: 105;
   color: ${({ theme }) => theme.colors.black};
   z-index: 9999;
 }

 .active .close-outline {
   display: inline-block;
 }

 .navbar-lists {
   width: 100vw;
   height: 100vh;
   position: absolute;
   top: 0;
   left: 0;
   background-color :#fff
   display: flex;
   justify-content : center;
   align-items: center;
   flex-direction : column;
   visibility: hidden;
   opacity: 0;
   transform: translatex(100%) ;
   transition : all 3s linear;
 
 }
 .active .navbar-lists {
   visibility: visible;
   opacity: 1;
   transform: translatex(0);
   z-index: 999;
   transform-origin: right;
   transition : all 3s linear;
   . navbar-link {
     font-size: 4.2rem;
   }
 }
 .cart-trolley--link {
   position : relative;
   .cart-trolley {
   position: relative;
   font-size: 5.2rem;
   }
   .cart-total--item{
   width: 4.2rem;
   height: 4.2rem;
   font-size: 2rem;
   }
 }

 .user-logout,
 .user-login {
   font-size: 2.2rem;
   padding: 0.8rem 1.4rem;
 }
}
  `;

  return (
    <StyledNav>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" onClick={() => setMenuIcon(!menuIcon)}>
            {menuIcon ? <CgClose /> : <CgMenu />}
          </button>
          <div className={`collapse navbar-collapse ${menuIcon ? 'show' : ''}`}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" onClick={() => setMenuIcon(false)}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link" onClick={() => setMenuIcon(false)}>About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/products" className="nav-link" onClick={() => setMenuIcon(false)}>Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link" onClick={() => setMenuIcon(false)}>Contact</NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to="/cart" className="nav-link cart-trolley--link" onClick={() => setMenuIcon(false)}>
                  <FiShoppingCart className='cart-trolley' /> <span className='cart-total--item'> 10 </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </StyledNav>
  );
}

export default Nav;
