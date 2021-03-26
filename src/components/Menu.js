import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    box-sizing: border-box;
    position: fixed;
    top: ${({ isMenuOpen }) => (isMenuOpen ? '8vh' : '-92vh')};
    opacity: ${({ isMenuOpen }) => (isMenuOpen ? 1 : 0)};
    width: 100vw;
    height: 92vh;
    background: white;
    z-index: 1;
    transition: all 0.5s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 50px;

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
`;

const Menu = ({ onClick, isMenuOpen, menuRef }) => {
  return (
    <StyledDiv onClick={onClick} isMenuOpen={isMenuOpen} ref={menuRef}>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/video'>Video</Link>
      <Link to='/buynow'>Buy Now</Link>
    </StyledDiv>
  );
};

export default Menu;
