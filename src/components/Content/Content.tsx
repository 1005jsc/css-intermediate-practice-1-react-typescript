import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Button, Container } from '../../globalStyle.style';
import {
  ContentButton,
  ContentDiv,
  ContentImageDiv,
  ContentImageImg,
  ContentMetadataDiv,
  ContentMetadataP1,
  ContentMetadataP2,
  ContentMetadataP3,
  ContentSection,
} from './Content.style';

type ContentProps = {
  headline: string;
  description: string;
  buttonLabel?: string;
};

const Content = ({ headline, description, buttonLabel }: ContentProps) => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    console.log(inView);
    console.log(entry);
  }, [entry]);

  return (
    <ContentSection>
      <Container>
        <ContentDiv ref={ref} reverse={false}>
          <ContentImageDiv>
            <ContentImageImg src='./assets/svg/Deal.svg' />
          </ContentImageDiv>
          <ContentMetadataDiv>
            <ContentMetadataP1>Founded in 2014</ContentMetadataP1>
            <ContentMetadataP2>
              We've been in <br />
              business for 9 years
            </ContentMetadataP2>
            <ContentMetadataP3>
              We have designed and implemented the best cloud security solutions
            </ContentMetadataP3>
            <ContentButton>Find More</ContentButton>
          </ContentMetadataDiv>
        </ContentDiv>
      </Container>
    </ContentSection>
  );
};
export default Content;
