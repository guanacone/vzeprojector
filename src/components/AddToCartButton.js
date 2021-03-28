import React, { useContext } from 'react';
import styled from 'styled-components';
import GlobalContext from './GlobalContext';

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
    width: 100%;
    &:hover {
    outline: 2px solid var(--blue);
    }
`;

const AddToCartButton = () => {
  const [, setIsCartOpen] = useContext(GlobalContext);
  return (
    <StyledButton onClick={() => setIsCartOpen(true)}>ADD TO CART</StyledButton>
  );
};

export default AddToCartButton;
