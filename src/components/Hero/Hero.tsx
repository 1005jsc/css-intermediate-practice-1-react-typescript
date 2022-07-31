import { useEffect, useState } from 'react';
import { Button, Container } from '../../globalStyle.style';
import {
  HeroButtonBtn,
  HeroButtonWrapperDiv,
  HeroMainHeadingH1,
  HeroSection,
  HeroTextP,
  HeroVideo,
} from './Hero.style';

const Hero = () => {
  const [innerWidth, setInnerWidth] = useState<number>(1080);

  const handleResize = () => {
    setInnerWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  useEffect(() => {
    setInnerWidth(window.innerWidth);
  }, []);

  return (
    <HeroSection id='hero'>
      <HeroVideo src='./assets/hero.mp4' autoPlay muted />
      <Container>
        <HeroMainHeadingH1>Your data is secure with us</HeroMainHeadingH1>
        {innerWidth > 1060 ? (
          <HeroTextP>
            We provide the best security systems for clients all over the world
          </HeroTextP>
        ) : (
          <HeroTextP>
            We provide the best security systems all over the world
          </HeroTextP>
        )}

        <HeroButtonWrapperDiv>
          <HeroButtonBtn>Get Started</HeroButtonBtn>
          <HeroButtonBtn>Find More</HeroButtonBtn>
        </HeroButtonWrapperDiv>
      </Container>
    </HeroSection>
  );
};
export default Hero;
