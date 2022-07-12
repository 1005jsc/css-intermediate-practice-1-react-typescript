import styled from 'styled-components';
import { Button, Section } from '../../globalStyle.style';
import { motion } from 'framer-motion';

export const ContentSection = styled(Section)`
  border: 1px solid white;
`;

type ContentDivProps = {
  reverse: boolean;
};

export const ContentDiv = styled(motion.div)<ContentDivProps>`
  display: flex;
  justify-content: center;
  flex-flow: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  align-items: center;
  height: 30rem;
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

export const ContentMetadataP1 = styled(motion.p)`
  font-size: 0.8rem;
  color: gray;
  letter-spacing: 0.1rem;
`;
export const ContentMetadataP2 = styled(motion.p)`
  font-size: 2.6rem;
  font-weight: 800;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
export const ContentMetadataP3 = styled(motion.p)`
  font-size: 1.1rem;
  letter-spacing: 0.06rem;
  color: gray;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export const ContentButton = styled(motion.button)`
  width: 8rem;
  height: 2.6rem;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 0.5rem;
  color: white;
  font-size: 1.1rem;
  letter-spacing: 0.08rem;
  cursor: pointer;
  color: blue;
  border: 2px solid blue;
  border-radius: 0.4rem;
`;
