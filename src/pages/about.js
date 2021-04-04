import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';

const StyledSection = styled.section`
  p {
    margin-bottom: 20px;
    text-align: justify;
  }

  a {
    color: var(--blue);
  }

  li {
    list-style-position: inside;
  }
`;

const About = () => {
  return (
    <>
      <SEO title='About'/>
      <StyledSection className='page-width'>
        <header>
          <h1>Visualize: How does it work?</h1>
        </header>
        <article>
          <p>
            VZE is a portable battery powered smart projector. The device has
            an external microphone that analyzes ambient music without storing any
            data. The beat’s frequency is used to render the mesmerizing music-inspired
            visuals, synchronized to the music. Just remember to crank up the
            volume of your tunes for the best experience!
          </p>
          <p>
            With several hundred different visualizer effects, VZE is equipped to
            provide endless audio-visual engagement. The projector will cycle through
            the visuals on its own, or you can select them using the remote control,
            or the buttons on the VZE itself.
          </p>
          <p>
            The rotating head of the projector allows you to show visuals on any
            surface. Turn the head to point upwards like a flash light, and your
            ceiling will be covered in visuals. Set it up straight, and your wall will
            turn pretty! The rim of the projector head has a metal ring. Twist it to
            adjust focus if the imagery appears blurry.
          </p>
          <p>
            To start your VZE experience just turn the projector on by pressing the
            power button - your visuals will start soon. If you later choose to use
            the device as a regular projector to watch Netflix or whatever, just hit
            the “back” button, and you will get back to the standard Android launcher
            screen. You can also use HDMI to connect your own media source.
          </p>
          <p>Tech Specs:</p>
          <ul>
            <li>System: Dual A53, 1GB DDR, Android 7.1</li>
            <li>Brightness: 100 ANSI lumens (600 Amazon lumens)</li>
            <li>Battery: Li-Ion, ~6hrs of operation</li>
            <li>Projection size: 3&quote; to 150&quote;</li>
            <li>Adjustable manual focus</li>
            <li>Automatic IMU-based keystoning</li>
            <li>Resolution input: 1080p, FullHD,  native resolution: 854x480</li>
            <li>Projection technology: DLP</li>
          </ul>
          <p>
            <small>
              The software is open source and can be found here: <a href='https://github.com/projectM-visualizer'>https://github.com/projectM-visualizer</a>
            </small>
          </p>
        </article>
      </StyledSection>
    </>
  );
};

export default About;
