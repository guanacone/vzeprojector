import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    position: fixed;
    top: 0;
    width: 40vw;
    height: 100vh;
    background: grey;
    right: ${(props) => (props.isCartOpen ? 0 : '-40vw')};
    transition: all 0.5s ease-in-out;
    z-index: 10;

    div {
      cursor: pointer;
      width: 40px;
      height: 6px;
      border-radius: 10px;
      transition: all 0.3s linear;
      background: white;
      margin: 15px;
      transform-origin: 5px;
      &:nth-child(1) {
      transform: rotate(45deg);
      }
      &:nth-child(2) {
        transform: rotate(-45deg);
      }
    }

    button {
      border: none;
      outline: none;
      cursor: pointer;
      background: transparent;
    }

    p {
     margin: 0;
    }

`;

const Cart = ({ isCartOpen, close }) => {
  return (
    <StyledDiv isCartOpen={isCartOpen}>
      <button onClick={close}>
        <div></div>
        <div></div>
      </button>
      <p>This is the cart</p>
    </StyledDiv>
  );
};

export default Cart;
