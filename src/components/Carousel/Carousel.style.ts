import styled from 'styled-components';
import { Container, Section } from '../../globalStyle.style';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const CarouselSection = styled(Section)`
  max-width: 1300px;
  margin: auto;
  padding: 50px 7rem;
  margin-bottom: 3rem;
  /* background-color: blue; */
  @media screen and (max-width: 656px) {
    padding: 10px 3rem;
  }
`;

export const CarouselContainer = styled(Container)`
  /* @media screen and (max-width: 656px) {
    width: 100%;
  } */
`;

export const CarouselTitleAndButtonsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  @media screen and (max-width: 1075px) {
    flex-flow: column;
  }
`;

export const CarouselTitleP = styled.p`
  font-size: 2.4rem;
  letter-spacing: 0.4rem;
  font-weight: 800;
  margin: 1.2rem;
  text-align: center;
  @media screen and (max-width: 1075px) {
    font-size: 1.8rem;
    /* margin: 0 0.8rem; */
  }
`;

export const CarouselButtonsDiv = styled.div``;
export const CarouselButtons = styled.button`
  margin: 0 1.3rem;
  font-size: 3rem;
  color: #20629d;
  background-color: transparent;

  @media screen and (max-width: 1075px) {
    font-size: 2.6rem;
    margin: 0 0.8rem;
  }
  @media screen and (max-width: 1075px) {
    font-size: 2.6rem;
  }
`;

export const CarouselSlider = styled(Slider)`
  width: 100%;

  .slick-track {
    display: flex;
    border: 1px solid black;
    padding-top: 2rem;
    padding-bottom: 2rem;
    /* padding-left: 1rem; */
    /* gap: 1rem; */
  }
`;

export const CardWrapper = styled.div`
  height: 26rem;
  padding: 0.7rem;
`;

export const CardWrapperTwo = styled.div`
  height: 100%;
  border: 5px solid gray;
  border-radius: 10px;
  position: relative;
`;

export const CardImageDiv = styled.div`
  height: 60%;
  border-radius: 5px 5px 0 0;
  background-color: aliceblue;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const CardImageImg = styled.img`
  height: 110%;
`;

export const CardMetadataDiv = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardMetadataP = styled.p`
  color: gray;
  font-size: 0.8rem;
  padding: 0.8rem;
  line-height: 1rem;
  letter-spacing: 0.1rem;
`;

export const CardBottomButton = styled.button`
  width: 100%;
  height: 3rem;
  padding: 0.3rem;
  padding-bottom: 0.5rem;
  letter-spacing: 0.1rem;
  color: white;
  font-size: 1.3rem;
  background-color: #20629d;
  &:hover {
    font-size: 1.4rem;
    background-color: #112f4a;
    transition: background-color 0.25s ease-in;
  }
`;
