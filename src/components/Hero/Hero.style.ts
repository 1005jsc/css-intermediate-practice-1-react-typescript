import styled from 'styled-components';
import { Button, Container, Section } from '../../globalStyle.style';

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
  @media screen and (max-width: 1060px) {
    font-size: 3.3rem;
    letter-spacing: 0.1rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 2.3rem;
    letter-spacing: 0.1rem;
  }
  @media screen and (max-width: 468px) {
    font-size: 2.3rem;
    letter-spacing: 0.1rem;
  }
  @media screen and (max-width: 300px) {
    font-size: 2.3rem;
    letter-spacing: 0.1rem;
  }
`;

export const HeroTextP = styled.p`
  color: white;
  text-align: center;
  font-size: 1.4rem;
  letter-spacing: 0.1rem;
  @media screen and (max-width: 1060px) {
    font-size: 1.2rem;
    letter-spacing: 0.1rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    letter-spacing: 0.1rem;
  }
`;

export const HeroButtonWrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  @media screen and (max-width: 468px) {
    flex-flow: column;
  }
  @media screen and (max-width: 300px) {
    font-size: 2.3rem;
    letter-spacing: 0.1rem;
  }
`;
export const HeroButtonBtn = styled(Button)`
  @media screen and (max-width: 468px) {
    width: 80%;
    margin-bottom: 0.8rem;
  }
  @media screen and (max-width: 300px) {
  }
`;
