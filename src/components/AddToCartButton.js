import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: var(--blue);
    outline: 0.5px solid var(--blue);
    border: none;
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 2px;
    text-align: center;
    padding: 10px 30px;
    line-height: 2.2;
    vertical-align: middle;
    cursor: pointer;
    transition: outline 0.1s linear;
    margin-top: 10px;
    &:hover {
    outline: 2px solid var(--blue);
    }
`;
const AddToCartButton = ({ setIsCartOpen }) => {
  return (
    <StyledButton onClick={() => setIsCartOpen(true)}>ADD TO CART</StyledButton>
  );
};

export default AddToCartButton;
