import React, { useState } from 'react';
import { Container } from '../../globalStyle.style';
import {
  CardBottomButton,
  CardImageDiv,
  CardImageImg,
  CardMetadataDiv,
  CardMetadataP,
  CardWrapper,
  CardWrapperTwo,
  CarouselButtons,
  CarouselButtonsDiv,
  CarouselSection,
  CarouselSlider,
  CarouselTitleAndButtonsDiv,
  CarouselTitleP,
} from './Carousel.style';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { data, settings } from '../../data/CarouselData';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const Carousel = () => {
  const [sliderRef, setSliderRef] = useState<any>(null);

  const carouselData = data;

  return (
    <CarouselSection>
      <Container>
        <CarouselTitleAndButtonsDiv>
          <CarouselTitleP>Find more about us</CarouselTitleP>
          <CarouselButtonsDiv>
            <CarouselButtons onClick={sliderRef?.slickPrev}>
              <FaArrowAltCircleLeft />
            </CarouselButtons>
            <CarouselButtons onClick={sliderRef?.slickNext}>
              <FaArrowAltCircleRight />
            </CarouselButtons>
          </CarouselButtonsDiv>
        </CarouselTitleAndButtonsDiv>

        <CarouselSlider {...settings} ref={setSliderRef}>
          {carouselData.map((data, index) => {
            return (
              <CardWrapper key={index}>
                <CardWrapperTwo>
                  <CardImageDiv>
                    <CardImageImg src={data.image} />
                  </CardImageDiv>
                  <CardMetadataDiv>
                    <CardMetadataP>{data.description}</CardMetadataP>
                    <CardBottomButton>Learn More</CardBottomButton>
                  </CardMetadataDiv>
                </CardWrapperTwo>
              </CardWrapper>
            );
          })}
        </CarouselSlider>
      </Container>
    </CarouselSection>
  );
};
export default Carousel;
