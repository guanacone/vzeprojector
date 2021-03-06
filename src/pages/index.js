import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import BuyNowLink from '../components/BuyNowLink';
import AddToCartButton from '../components/AddToCartButton';
import Video from '../assets/video/splashscreen.mp4';
import SEO from '../components/SEO';

const StyledSection = styled.section`
  article {
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
  }

  video {
    background: black;
    :focus { outline:none; }
    &#video {
      min-width: 100%;
      max-height: 92vh;
    }
  }

  .image-container, .text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    width: 50%;
    padding: 5% 5%;
  }

  .text-container {
    max-width: 500px;
    margin: 0 auto;
    h2 {
      &::before {
        content: '';
        display: block;
        width: 80px;
        height: 6px;
        margin-bottom: 20px;
        background-color: var(--blue);
        margin: 0 0 20px;
      }
    }

    a {
      color: var(--blue);      
      text-align: center;
      margin-top: 15px;
      transition: 0.15s opacity ease-out;
      .icon {
        padding-right: 20px;
      }
      &:hover {
        opacity: 0.5;
      }
    }
  } 

  .last {
    width: 40%;
    margin: 0;
    display: flex;
    justify-content: center;
    div {
      display: flex;
      justify-content: center
    }
    h2 {
      text-align: center;
      &::before{
       content: none;
      }
    }
    span {
      margin-right: 15px;
    }
    img {
      transition: transform 0.3s ease-in; 
      &:hover {
        transform: scale(1.1);
      }
    }
  }

  .promo-price {
    color: var(--blue);
  }

  .regular-price {
    text-decoration: line-through var(--blue) solid;
  }

  @media(max-width: 769px) {

    .container {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;  
    }

    .image-container, .text-container {
      width: 80%;
    }  
  }   
`;

const Home = ({ data }) => {
  const images = [data.image1, data.image2, data.image3].map(getImage);
  return (
    <>
      <SEO title='Home'/>
      <StyledSection>
        <article>
          <video id='video' controls autoPlay muted loop>
            <source src={Video} type='video/mp4'></source>
          </video>
        </article>
        <article className='container'>
          <div className='image-container'>
            <GatsbyImage image={images[0]} alt='picture' />
          </div>
          <div className='text-container animation'>
            <h2 className=' has-animation'>PORTABLE MUSIC VISUALIZER</h2>
            <div>
              <p>Transform music into mesmerizing visuals anywhere you go!
                Project powerful audio-visualization in real time to any surface,
                wall, ceiling or floor. With extensive battery life, VZE works hard
                to blow your friends??? minds in any  setting or plane of reality. It
                plays normal media too, just in case you need a Netflix binge after
                your full-moon party.</p>
            </div>
            <BuyNowLink/>
          </div>
        </article>
        <article className='container'>
          <div className='text-container'>
            <h2>Hands-free night-tripping!</h2>
            <div>
              <p>Unlike ordinary projectors, the VZE requires no tripods,
                mounts, or cables. Its lens can pivot 90 degrees from wall to ceiling
                in one fluid motion, and it can be held like a flashlight for
                visuals-on-the-go. No matter how you position or play with it, VZE
                offers an uncompromisingly immersive party experience.</p>
            </div>
            <BuyNowLink/>
          </div>
          <div className='image-container'>
            <GatsbyImage image={images[1]} alt='picture' />
          </div>
        </article>
        <article className='container'>
          <div className='image-container last'>
            <GatsbyImage image={images[2]} alt='picture' />
          </div>
          <div className='text-container last'>
            <h2>VZE: Music Visualizer</h2>
            <div>
              <span className='promo-price'>$299.95</span>
              <span className='regular-price'>$350.00</span>
            </div>
            <AddToCartButton/>
            <Link to='about'>
              <FontAwesomeIcon className='icon' icon={faList}/>
              <span>FULL DETAILS</span>
            </Link>
          </div>
        </article>
      </StyledSection>
    </>
  );
};

export default Home;

export const pageQuery = graphql`
  query {
    image1: file(
      relativePath: {eq: "assets/images/laser-smart-projector-pico_1.webp"}
    ) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          aspectRatio: 1.2
        )
      }
    }
    image2: file(
      relativePath: {eq: "assets/images/laser-smart-projector-pico_2.webp"}
    ) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          aspectRatio: 1.2
        )
      }
    }
    image3: file(
      relativePath: {eq: "assets/images/laser-smart-projector-pico_3.webp"}
    ) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          aspectRatio: 1
        )
      }
    }
  }
`;
