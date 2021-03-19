import React, { useState } from 'react';
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
  
  &.sticky {
    position: fixed;
    top: 0;
    animation: slidein 0.5s ease-in;
    @keyframes slidein {
      from {top: -8vh}
      to {top: 0}
    };
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
  window.onscroll = () => {
    if (window.pageYOffset > window.innerHeight) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  return (
    <StyledNav className={isSticky ? 'sticky' : null}>
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
