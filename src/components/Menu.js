import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const StyledMenu = styled.menu`
  box-sizing: border-box;
  position: fixed;
  margin-top: 0;
  top: ${({ isMenuOpen }) => (isMenuOpen ? '8vh' : '-92vh')};
  opacity: ${({ isMenuOpen }) => (isMenuOpen ? 1 : 0)};
  width: 100vw;
  height: 92vh;
  background: white;
  z-index: 1;
  transition: all 0.5s ease-in-out;
  transition-property: top, opacity;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 5%;

  a {
    font-size: 2.5rem;
    text-decoration: none;
    color: var(--gray);
    padding-top: 10px;
    transition: transform 0.25s ease-out;
    ::after {
      content: '';
      display: block;
      position: relative;
      bottom: 0.9rem;
      width: 0;
      margin: 0 auto;
      height: 2px;
      background-color: black;
      transition: all 0.4s;
      margin: 5px auto;
    }
    :hover {
      transform: translateY(-5px);
      ::after {
          width: 100%;
      }
    }
  }
@media(max-width: 481px) {
  a {
    font-size: 2rem;
  }
}
`;

const Menu = ({ onClick, isMenuOpen, menuRef }) => {
  return (
    <StyledMenu onClick={onClick} isMenuOpen={isMenuOpen} ref={menuRef}>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/video'>Video</Link>
      <Link to='/buynow'>Buy Now</Link>
    </StyledMenu>
  );
};

export default Menu;
