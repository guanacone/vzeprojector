import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Cart from './Cart';

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
  opacity: 0.5;
  z-index: 1;
  display: none;
`;

const StyledNav = styled.nav`
  box-sizing: border-box;
  width: 100%;
  height: 8vh;
  background: black;
  z-index: 1;
  min-height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: opacity 0.5s ease-in;

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
  }

  &.cart-open {
    transform: translate(-40vw)
  }

  .gatsby-image-wrapper {
    display: flex;
    justify-content: center;
    margin: 5px;
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

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const buttonRef = useRef(null);
  const iconRef = useRef(null);
  // NavBar scroll effect
  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateIsScrollingUp = () => {
      const scrollY = window.pageYOffset;
      setIsScrollingUp(scrollY < lastScrollY);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      if (window.pageYOffset > window.innerHeight) {
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
    if (isCartOpen) {
      document.body.setAttribute('style', 'position: fixed; left: 0; right: 0');
    } else {
      document.body.setAttribute('style', '');
    }
  }, [isCartOpen]);
  // Close cart when click on cross
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (buttonRef.current.contains(target)) {
        console.log({ iconRef });
        iconRef.current.click();
      }
    };
    document.addEventListener('click', clickHandler);

    return () => document.removeEventListener('click', clickHandler);
  }, []);
  return (
    <>
      <Cart buttonRef={buttonRef} isCartOpen={isCartOpen}/>
      <MaskerDiv/>
      <FillerDiv isSticky={isSticky}/>
      <StyledNav className={`
        ${isSticky ? 'sticky' : ''}
        ${isScrollingUp && isSticky ? 'up' : ''}
      `}>
        <div>
          <button ref={iconRef} onClick={() => setIsCartOpen(!isCartOpen)}>
            <FontAwesomeIcon className='icon' icon={faBars}/>
          </button>
        </div>
        <div>
          <Link to='/'>
            <StaticImage src='../assets/images/vze_logo.png' height={50} alt='vze projector logo'/>
          </Link>
        </div>
        <div>
          <button>
            <FontAwesomeIcon className='icon' icon={faShoppingCart}/>
          </button>
        </div>
      </StyledNav>
    </>
  );
};

export default NavBar;
