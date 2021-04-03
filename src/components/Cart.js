import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link, navigate, graphql, useStaticQuery } from 'gatsby';
import { PayPalButton } from 'react-paypal-button-v2';
import formatMoney from '../utils/formatMoney';
import GlobalContext from './GlobalContext';

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

const Cart = () => {
  const price = 29995;
  const [orderTotal, setOrderTotal] = useState(price);
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [isCartOpen, setIsCartOpen] = useContext(GlobalContext);
  const { file } = useStaticQuery(graphql`
  {
      file(relativePath: {eq: "assets/images/laser-smart-projector-pico_3.webp"}) {
        childImageSharp {
          gatsbyImageData(aspectRatio: 1, placeholder: BLURRED)
        }
      }
    }
  `);
  const productPic = getImage(file);

  useEffect(() => {
    setOrderTotal(orderQuantity * price);
  }, [orderQuantity]);

  const getOrderTotal = () => {
    return (orderTotal / 100).toString();
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };
  return (
    <StyledDiv isCartOpen={isCartOpen}>
      <button onClick={closeCart}>
        <div className='closing'></div>
        <div className='closing'></div>
      </button>
      <div className='cart-content'>
        <Link to='/about' onClick={closeCart}>
          <GatsbyImage image={productPic} alt='folded vze projector'/>
          VZE: Music Visualizer
        </Link>
        <form>
          <label htmlFor='quantity'>Ordered quantity:</label>
          <input
            type='number'
            name='quantity'
            id='quantity'
            value={orderQuantity}
            onChange={
              (e) => {
                setOrderQuantity(e.target.value);
              }}
            min={0}
            max={5}
            required/>
        </form>
        <p>your order total is {formatMoney(orderTotal)}</p>
      </div>
      <PayPalButton
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                currency_code: 'USD',
                value: getOrderTotal(),
                breakdown: {
                  item_total: {
                    currency_code: 'USD',
                    value: getOrderTotal(),
                  },
                },
              },
              items: [
                {
                  name: 'VZE Projector',
                  description: 'Portable music visualizer',
                  unit_amount: {
                    currency_code: 'USD',
                    value: price / 100,
                  },
                  quantity: orderQuantity,
                },
              ],
            }],
          });
        }}
        onSuccess={(details) => {
          setIsCartOpen(false);
          navigate('/order-complete/', { state: { details } });
        }}
        options={
          {
            clientId: 'AeBznbYjIdRw8kNGj8V781-lE2PiUUhuvmO90ZJMOLGz9iVQLb_qDuTpjM2iRcPSNnwzZNCZjHLSGaPJ',
          }
        }
        style={
          {
            layout: 'horizontal',
            tagline: false,
          }
        }
      />
    </StyledDiv>
  );
};

export default Cart;
