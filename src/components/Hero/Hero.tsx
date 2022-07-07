import React from 'react';
import { Button, Container } from '../../globalStyle.style';
import {
  HeroButtonWrapperDiv,
  HeroMainHeadingH1,
  HeroSection,
  HeroTextP,
  HeroVideo,
} from './Hero.style';

const Hero = () => {
  return (
    <HeroSection id='hero'>
      <HeroVideo src='./assets/hero.mp4' autoPlay muted />
      <Container>
        <HeroMainHeadingH1>Your data is secure with us</HeroMainHeadingH1>
        <HeroTextP>
          We provide the best security systems for clients all over the world
        </HeroTextP>
        <HeroButtonWrapperDiv>
          <Button>Get Started</Button>

          <Button>Find More</Button>
        </HeroButtonWrapperDiv>
      </Container>
    </HeroSection>
  );
};
export default Hero;
