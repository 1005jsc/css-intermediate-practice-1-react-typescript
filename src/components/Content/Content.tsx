import { useAnimation } from 'framer-motion';
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
    threshold: 0.3,
  });
  const animation = useAnimation();
  const initial = {
    opacity: 0,
    y: 20,
  };
  useEffect(() => {
    console.log(inView);
    console.log(entry);

    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
      });
    } else {
      animation.start({
        opacity: 0,
        y: 30,
      });
    }
  }, [entry]);

  return (
    <ContentSection>
      <Container>
        <ContentDiv ref={ref} reverse={false}>
          <ContentImageDiv
            initial={initial}
            animate={animation}
            transition={inView ? { delay: 0.3, duration: 0.6 } : {}}
          >
            <ContentImageImg
              src='./assets/svg/Deal.svg'
              whileHover={{ scale: 1.02, rotate: 2 }}
              transition={{ duration: 0.5 }}
            />
          </ContentImageDiv>
          <ContentMetadataDiv>
            <ContentMetadataP1
              initial={initial}
              animate={animation}
              transition={inView ? { delay: 0.4, duration: 0.6 } : {}}
            >
              Founded in 2014
            </ContentMetadataP1>
            <ContentMetadataP2
              initial={initial}
              animate={animation}
              transition={inView ? { delay: 0.6, duration: 0.6 } : {}}
            >
              We've been in <br />
              business for 9 years
            </ContentMetadataP2>
            <ContentMetadataP3
              initial={initial}
              animate={animation}
              transition={inView ? { delay: 0.8, duration: 0.6 } : {}}
            >
              We have designed and implemented the best cloud security solutions
            </ContentMetadataP3>
            <ContentButton
              initial={initial}
              animate={animation}
              transition={inView ? { delay: 1.2, duration: 0.8 } : {}}
            >
              Find More
            </ContentButton>
          </ContentMetadataDiv>
        </ContentDiv>
      </Container>
    </ContentSection>
  );
};
export default Content;
