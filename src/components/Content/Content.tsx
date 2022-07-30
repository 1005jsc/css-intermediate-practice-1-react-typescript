import { useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Container } from '../../globalStyle.style';
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
  reverse: boolean;
  topLine?: { text: string };
  headline?: string;
  description?: string;
  buttonLabel?: string;
  img?: string;
  backgroundDark: boolean;
};

const Content = ({
  reverse,
  topLine,
  headline,
  description,
  buttonLabel,
  img,
  backgroundDark,
}: ContentProps) => {
  const { ref, inView, entry } = useInView({
    threshold: 0.3,
  });
  const animation = useAnimation();
  const initial = {
    opacity: 0,
    y: 20,
  };
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
      });
    } else {
      animation.start({
        opacity: 0,
        y: 20,
      });
    }
  }, [entry]);

  return (
    <ContentSection backgroundDark={backgroundDark}>
      <Container>
        <ContentDiv ref={ref} backgroundDark={backgroundDark} reverse={reverse}>
          <ContentImageDiv
            initial={initial}
            animate={animation}
            transition={inView ? { delay: 0.3, duration: 0.6 } : {}}
          >
            <ContentImageImg
              src={img}
              whileHover={{ scale: 1.02, rotate: 2 }}
              transition={{ duration: 0.5 }}
            />
          </ContentImageDiv>
          <ContentMetadataDiv>
            <ContentMetadataP1
              initial={initial}
              backgroundDark={backgroundDark}
              animate={animation}
              transition={inView ? { delay: 0.4, duration: 0.6 } : {}}
            >
              {topLine?.text}
            </ContentMetadataP1>
            <ContentMetadataP2
              initial={initial}
              animate={animation}
              backgroundDark={backgroundDark}
              transition={inView ? { delay: 0.6, duration: 0.6 } : {}}
            >
              {headline}
            </ContentMetadataP2>
            <ContentMetadataP3
              initial={initial}
              animate={animation}
              backgroundDark={backgroundDark}
              transition={inView ? { delay: 0.8, duration: 0.6 } : {}}
            >
              {description}
            </ContentMetadataP3>
            <ContentButton
              initial={initial}
              animate={animation}
              backgroundDark={backgroundDark}
              transition={inView ? { delay: 1.2, duration: 0.8 } : {}}
            >
              {buttonLabel}
            </ContentButton>
          </ContentMetadataDiv>
        </ContentDiv>
      </Container>
    </ContentSection>
  );
};
export default Content;
