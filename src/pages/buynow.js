import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import AddToCartButton from '../components/AddToCartButton';
import SEO from '../components/SEO';

const StyledSection = styled.section`
  article {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    text-align: center;
    font-size: 1.5rem;    
    span {
      margin-right: 10px;
    }
  }

  .image-container {
    display: flex;
    justify-content: center;
    max-width: 80%;
  }

  .content-container {
    margin: 50px 0;
    width: 70%;
    display: flex;
    
    div {
      width: 50%;
      margin: 0 20px;
    }

    p {
      text-align: justify;
      margin: 0;
    }
  }

  .promo-price {
    color: var(--blue);
  }

  .regular-price {
    text-decoration: line-through var(--blue) solid;
  }

  #zoom {
    transition: transform 0.3s ease-in;
    :hover {
      transform: scale(1.1)
    }
  }

  @media(max-width: 769px) {
    .content-container {
      flex-direction: column-reverse;
      align-items: center;

      div {
        width: 80%;
      }
    }

    .image-container {
      flex-direction: column;
    }
  }
`;

const BuyNow = ({ data }) => {
  const images = [data.image1, data.image2, data.image3].map(getImage);
  return (
    <>
      <SEO title='Buy Now'/>
      <StyledSection>
        <header>
          <h1>VZE: Music Visualizer</h1>
        </header>
        <article>
          <div className='image-container'>
            <GatsbyImage id='zoom' image={images[2]} alt='picture' />
          </div>
          <div>
            <p>
              <span className='promo-price'>$299.95</span>
              <span className='regular-price'>$350.00</span>
            </p>
          </div>
          <div className='content-container'>
            <div>
              <AddToCartButton/>
            </div>
            <div>
              <p>VZE is a portable battery powered smart projector.
                The device has an external microphone that analyzes ambient
                music without storing any data. The beat’s frequency is used to render
                the mesmerizing music-inspired visuals, synchronized to the music.
                Just remember to crank up the volume of your tunes for the best
                experience!</p>
            </div>
          </div>
          <div className='image-container'>
            <GatsbyImage id='zoom' image={images[2]} alt='picture' />
            <GatsbyImage id='zoom' image={images[1]} alt='picture' />
            <GatsbyImage id='zoom' image={images[0]} alt='picture' />
          </div>
        </article>
      </StyledSection>
    </>
  );
};

export default BuyNow;

export const pageQuery = graphql`
  query {
    image1: file(
      relativePath: {eq: "assets/images/laser-smart-projector-pico_1.webp"}
    ) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          aspectRatio: 1
          width: 650
        )
      }
    }
    image2: file(
      relativePath: {eq: "assets/images/laser-smart-projector-pico_2.webp"}
    ) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          aspectRatio: 1
          width: 650
        )
      }
    }
    image3: file(
      relativePath: {eq: "assets/images/laser-smart-projector-pico_3.webp"}
    ) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          width: 650
        )
      }
    }
  }
`;
