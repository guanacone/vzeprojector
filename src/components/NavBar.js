import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Cart from './Cart';
import GlobalContext from './GlobalContext';
import Menu from './Menu';

const FillerDiv = styled.div`
  height: 8vh;
  display: ${(props) => (props.isSticky ? 'block' : 'none')};
`;

const MaskerDiv = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  background: black;
  opacity: 0.7;
  display: none;
  z-index: 7;
  &.active {
    display: block;
  }
`;

const StyledNav = styled.nav`
  box-sizing: border-box;
  width: 100vw;
  height: 8vh;
  padding-top: 5px;
  background: black;
  z-index: 5;
  min-height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: opacity 0.5s ease-in;
  position: relative;

  button {
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
  
  &.sticky {
    position: fixed;
    top: 0;
    animation: slidein 0.5s ease-in;
    @keyframes slidein {
      from {top: -8vh}
      to {top: 0}
    };
  }

  &.up {
    opacity: 0;
    pointer-events: none;
  }

  &.cart-open {
    transform: translate(-40vw)
  }

  .icon {
    color: white;
    font-size: 3rem;
    transition: transform 0.2s ease-in; 
    :hover {
      transform: scale(1.2)
    }
  }
`;

const NavBar = ({ location }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useContext(GlobalContext);
  // NavBar scroll effect
  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    const updateIsScrollingUp = () => {
      const scrollY = window.pageYOffset;
      setIsScrollingUp(scrollY < lastScrollY);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      if (location.pathname === '/') {
        if (window.pageYOffset > window.innerHeight) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      } else if (window.pageYOffset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', updateIsScrollingUp);

    return () => window.removeEventListener('scroll', updateIsScrollingUp);
  }, [isScrollingUp, isSticky]);
  // Disable scroll when cart open
  useEffect(() => {
    if (isCartOpen || isMenuOpen) {
      document.body.setAttribute('style', 'overflow: hidden;');
    } else {
      document.body.setAttribute('style', '');
    }
  }, [isCartOpen, isMenuOpen]);
  // close menu with 'esc' key
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (keyCode !== 27) return;
      setIsCartOpen(false);
      setIsMenuOpen(false);
    };
    document.addEventListener('keydown', keyHandler);

    return () => document.removeEventListener('keydown', keyHandler);
  }, []);
  return (
    <>
      <Cart/>
      <MaskerDiv onClick={() => setIsCartOpen(!isCartOpen)}className={isCartOpen ? 'active' : ''} />
      <FillerDiv isSticky={isSticky}/>
      <StyledNav className={`
        ${isSticky ? 'sticky' : ''}
        ${isScrollingUp && isSticky ? 'up' : ''}
      `}>
        <div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FontAwesomeIcon className='icon' icon={faBars}/>
          </button>
        </div>
        <div>
          <Link to='/' onClick={() => setIsMenuOpen(false)}>
            <StaticImage src='../assets/images/vze_logo.png' height={50} alt='vze projector logo'/>
          </Link>
        </div>
        <div>
          <button onClick={() => setIsCartOpen(!isCartOpen)}>
            <FontAwesomeIcon className='icon' icon={faShoppingCart}/>
          </button>
        </div>
      </StyledNav>
      <Menu onClick={() => setIsMenuOpen(!isMenuOpen)} isMenuOpen={isMenuOpen}/>
    </>
  );
};

export default NavBar;
