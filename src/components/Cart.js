import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    width: 40vw;
    height: 100vh;
    background: red;
    display: ${(props) => (props.isCartOpen ? 'block' : 'none')};
    z-index: 1;

    p {
     margin: 0;
    }

`;

const Cart = ({ isCartOpen }) => {
  return (
    <StyledDiv isCartOpen={isCartOpen}>
      <p>This is the cart</p>
    </StyledDiv>
  );
};

export default Cart;
