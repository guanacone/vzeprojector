import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

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
    console.log(isScrollingUp);

    return () => window.removeEventListener('scroll', updateIsScrollingUp);
  }, [isScrollingUp, isSticky]);

  return (
    <StyledNav className={`${isSticky ? 'sticky' : ''} ${isScrollingUp && isSticky ? 'up' : ''}`}>
      <div>
        <Link to='#'>
          <FontAwesomeIcon className='icon' icon={faBars}/>
        </Link>
      </div>
      <div>
        <Link to='#'>
          <StaticImage src='../assets/images/vze_logo.png' height={50}/>
        </Link>
      </div>
      <div>
        <Link to='#'>
          <FontAwesomeIcon className='icon' icon={faShoppingCart}/>
        </Link>
      </div>

    </StyledNav>
  );
};

export default NavBar;
