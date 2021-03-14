/* eslint-disable max-len */
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  section {
    display: flex;

  }

  .image-container, .text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    width: 50%;
  }

  .text-container {
    padding: 50px 150px;
    h2 {
      &:before {
        content: '';
        display: block;
        width: 80px;
        height: 6px;
        margin-bottom: 20px;
        background-color: #00ceff;
        transition: width 0.5s ease-out;
        margin: 0 0 20px;
      } 
    }
  }

  .image-container {
  }
  
`;

const Home = ({ data }) => {
  const image1 = getImage(data.image1);
  const image2 = getImage(data.image2);
  const image3 = getImage(data.image3);
  return (
    <StyledDiv>
      <section>
        <div className='image-container'>
          <GatsbyImage image={image1} alt='picture' />
        </div>
        <div className='text-container'>
          <h2>PORTABLE MUSIC VISUALIZER</h2>
          <div>
            <p>Transform music into mesmerizing visuals anywhere you go! Project powerful audio-visualization in real time to any surface, wall, ceiling or floor. With extensive battery life, VZE works hard to blow your friends’ minds in any  setting or plane of reality. It plays normal media too, just in case you need a Netflix binge after your full-moon party.</p>
          </div>
        </div>
      </section>
      <section>
        <div className='text-container'>
          <h2>PORTABLE MUSIC VISUALIZER</h2>
          <div>
            <p>Transform music into mesmerizing visuals anywhere you go! Project powerful audio-visualization in real time to any surface, wall, ceiling or floor. With extensive battery life, VZE works hard to blow your friends’ minds in any  setting or plane of reality. It plays normal media too, just in case you need a Netflix binge after your full-moon party.</p>
          </div>
        </div>
        <div className='image-container'>
          <GatsbyImage image={image2} alt='picture' />
        </div>
      </section>
      <section>
        <div className='image-container'>
          <GatsbyImage image={image3} alt='picture' />
        </div>
        <div className='text-container'>
          <h2>VZE: Music Visualizer</h2>
          <div>
            <p></p>
          </div>
        </div>
      </section>
    </StyledDiv>
  );
};

export default Home;

export const pageQuery = graphql`
  query {
    image1: imageSharp(id: {eq: "e9a32af1-f9e1-56bd-9e57-c605aa146eae"}) {
      gatsbyImageData(placeholder: DOMINANT_COLOR, width: 750, aspectRatio: 1.5)
    }
    image2: imageSharp(id: {eq: "2d74af75-e255-5063-914d-251304d07400"}) {
      gatsbyImageData(placeholder: DOMINANT_COLOR, width: 750, aspectRatio: 1.5)
    }
    image3: imageSharp(id: {eq: "5435a080-207d-5f01-b0a5-8a0b17677f34"}) {
      gatsbyImageData(placeholder: DOMINANT_COLOR, height: 500, aspectRatio: 1)
    }
  }
`;
