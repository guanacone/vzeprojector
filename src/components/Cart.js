import React, { useState } from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link, graphql, useStaticQuery } from 'gatsby';
import formatMoney from '../utils/formatMoney';

const StyledDiv = styled.div`
  position: fixed;
  top: 0;
  width: 40vw;
  height: 100vh;
  background: grey;
  right: ${(props) => (props.isCartOpen ? 0 : '-40vw')};
  transition: all 0.5s ease-in-out;
  z-index: 10;
  color: white;
  font-weight: 900;
  font-size: 2rem;

  button {
    border: none;
    outline: none;
    cursor: pointer;
    background: transparent;
  }

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    color: white;
  }

  form {
    width: 80%;
    display: flex;
    justify-content: space-evenly; 
  }

  .closing {
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

  .gatsby-image-wrapper {
    margin: 8%;
    width: 30%;
    border-radius: 50%;
  }

  .cart-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

`;

const Cart = ({ isCartOpen, close }) => {
  const [order, setOrder] = useState(1);
  const data = useStaticQuery(graphql`
  {
      file(relativePath: {eq: "assets/images/laser-smart-projector-pico_3.webp"}) {
        childImageSharp {
          gatsbyImageData(aspectRatio: 1, placeholder: BLURRED)
        }
      }
    }
  `);
  const productPic = getImage(data.file);

  return (
    <StyledDiv isCartOpen={isCartOpen}>
      <button onClick={close}>
        <div className='closing'></div>
        <div className='closing'></div>
      </button>
      <div className='cart-content'>
        <Link to='about'>
          <GatsbyImage image={productPic} alt='folded vze projector'/>
          VZE: Music Visualizer
        </Link>
        <form onSubmit={(e) => {
          e.preventDefault();
          console.log('submited');
        }}>
          <label htmlFor='quantity'>Ordered quantity:</label>
          <input
            type='number'
            name='quantity'
            id='quantity'
            value={order}
            onChange={(e) => { setOrder(e.target.value); }}
            min={0}
            max={5}
            required/>
        </form>
        <p>your order total is {formatMoney((order * 29995))}</p>
      </div>
    </StyledDiv>
  );
};

export default Cart;
