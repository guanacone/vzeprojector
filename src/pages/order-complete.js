import React from 'react';
import styled from 'styled-components';
import formatMoney from '../utils/formatMoney';
import SEO from '../components/SEO';

const StyledSection = styled.section`
  article {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ul {
    list-style: none;
  }
`;

const OrderComplete = ({ location: { state: { details } } }) => {
  const orderDetails = details.purchase_units[0];
  return (
    <>
      <SEO title='Order Complete'/>
      <StyledSection className='page-width'>
        <header>
          <h1>Your Order Is Completed</h1>
          <h2>Thank you for your purchase. Your order will ship soon</h2>
        </header>
        <article>
          <h2>Order recap:
          </h2>
          <ul>
            <li><strong>Order id:</strong>&nbsp;{details.id}</li>
            <li>
              <strong>Order amount:</strong>
              {formatMoney(orderDetails.amount.value * 100)}
            </li>
            <li><strong>Shipping to:</strong>
              <div>{orderDetails.shipping.name.full_name}</div>
              <div>{orderDetails.shipping.address.address_line_1}</div>
              <div>{orderDetails.shipping.address.address_line_2}</div>
              <div>
                {orderDetails.shipping.address.country_code}-
                {orderDetails.shipping.address.postal_code}&nbsp;
                {orderDetails.shipping.address.admin_area_2}
              </div>
            </li>
          </ul>
        </article>
      </StyledSection>
    </>
  );
};

export default OrderComplete;
