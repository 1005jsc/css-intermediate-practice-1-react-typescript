import styled from 'styled-components';
import { Container, Section } from '../../globalStyle.style';

export const HeroSection = styled(Section)`
  width: 98vw;
  height: calc(100vh - 15px);
  padding-top: clamp(70px, 25vh, 220px);
`;

export const HeroContainer = styled(Container)``;

export const HeroVideo = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
`;

export const HeroMainHeadingH1 = styled.h1`
  color: white;
  text-align: center;
  font-size: 4rem;
  letter-spacing: 0.4rem;
  margin: 0;
  /* font-family: 'Ibarra Real Nova'; */
  margin-bottom: 2rem;
`;

export const HeroTextP = styled.p`
  color: white;
  text-align: center;
  font-size: 1.4rem;
  letter-spacing: 0.1rem;
`;

export const HeroButtonWrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;
