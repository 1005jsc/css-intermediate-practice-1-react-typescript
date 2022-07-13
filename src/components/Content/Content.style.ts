import styled from 'styled-components';
import { Section } from '../../globalStyle.style';
import { motion } from 'framer-motion';

type ContentSectionProps = {
  backgroundDark: boolean;
};

export const ContentSection = styled(Section)<ContentSectionProps>`
  background-color: ${({ backgroundDark }) =>
    backgroundDark ? '#071c2f' : ''};
`;

type ContentDivProps = {
  reverse: boolean;
  backgroundDark: boolean;
};

export const ContentDiv = styled(motion.div)<ContentDivProps>`
  display: flex;
  justify-content: center;
  flex-flow: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  align-items: center;
  height: 30rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
`;

export const ContentImageDiv = styled(motion.div)`
  height: 24rem;
`;

export const ContentImageImg = styled(motion.img)`
  height: 100%;
`;

export const ContentMetadataDiv = styled.div`
  width: 32rem;
  height: 22rem;
  padding: 0 1rem;
`;

type ContentMetadataPProps = {
  backgroundDark: boolean;
};

export const ContentMetadataP1 = styled(motion.p)<ContentMetadataPProps>`
  font-size: 0.8rem;
  color: gray;
  letter-spacing: 0.1rem;
  color: ${({ backgroundDark }) => (backgroundDark ? '#ffffff' : '')};
`;
export const ContentMetadataP2 = styled(motion.p)<ContentMetadataPProps>`
  font-size: 2.8rem;
  font-weight: 800;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: ${({ backgroundDark }) => (backgroundDark ? '#ffffff' : '')};
`;
export const ContentMetadataP3 = styled(motion.p)<ContentMetadataPProps>`
  font-size: 1.2rem;
  letter-spacing: 0.06rem;
  color: gray;
  margin-top: 1rem;
  margin-bottom: 2rem;
  color: ${({ backgroundDark }) => (backgroundDark ? '#ffffff' : '')};
`;

export const ContentButton = styled(motion.button)<ContentMetadataPProps>`
  width: 10rem;
  height: 3rem;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 0.5rem;
  color: white;
  font-size: 1.1rem;
  line-height: 1rem;
  letter-spacing: 0.08rem;
  cursor: pointer;
  color: ${({ backgroundDark }) => (backgroundDark ? '#ffffff' : 'blue')};

  border: 2px solid
    ${({ backgroundDark }) => (backgroundDark ? '#ffffff' : 'blue')};
  border-radius: 0.4rem;
`;
