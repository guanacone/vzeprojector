import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  padding-top: 100px;

  .main-video {
      position: relative;
      overflow: hidden;
      padding-top: 56.25%;
  }

  .first-clip {
    display: none;
  }

  .secondary-video {
    margin: 60px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    
    iframe {
      padding: 5px
    }
  }

  .responsive-iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }

  @media(max-width: 769px) {
    .main-video {
      display: none;
    }

    .first-clip {
      display: block;
    }

    .secondary-video {
      margin: 0;
    }
  }
`;

const Video = () => {
  return (
    <StyledSection className='page-width'>
      <article>
        <div className='main-video'>
          <iframe className='responsive-iframe' src='https://www.youtube.com/embed/AfDvTFAU2bs?controls=0' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
        </div>
        <div className='secondary-video'>
          <iframe className='first-clip' src='https://www.youtube.com/embed/AfDvTFAU2bs?controls=0' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
          <iframe src='https://www.youtube.com/embed/DN2c_P1HFGY?controls=0' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
          <iframe src='https://www.youtube.com/embed/ziFxkCQvkZY?controls=0' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
          <iframe src='https://www.youtube.com/embed/kazVS9kEwZY?controls=0' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
          <iframe src='https://www.youtube.com/embed/0IqZba72rj8?controls=0' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
          <iframe src='https://www.youtube.com/embed/n8igvEG32jk?controls=0' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
        </div>
      </article>
    </StyledSection>
  );
};

export default Video;
