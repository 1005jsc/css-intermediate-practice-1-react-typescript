import React, { useEffect, useState } from 'react';
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
import { data, settings, settings2, settings3 } from '../../data/CarouselData';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const Carousel = () => {
  const [sliderRef, setSliderRef] = useState<any>(null);

  const carouselData = data;

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

        <CarouselSlider
          {...(innerWidth > 900
            ? settings
            : innerWidth > 750
            ? settings2
            : settings3)}
          ref={setSliderRef}
        >
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
