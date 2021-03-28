import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    background-color: transparent;
    color: #00ceff;
    outline: 1px solid #00ceff;
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 2px;
    text-align: center;
    padding: 10px 30px;
    line-height: 2.2;
    cursor: pointer;
    height: 350px;
    transition: outline 0.2s linear;
    box-sizing: border-box;
    width: 50%;
    height: auto;
    margin-top: 10px;
    :hover {
        outline-width: 5px;
    }    
`;

const BuyNowLink = () => {
  return (
    <StyledLink to='/buynow'>Buy Now!</StyledLink>
  );
};

export default BuyNowLink;
