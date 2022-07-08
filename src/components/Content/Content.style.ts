import styled from 'styled-components';
import { Button, Section } from '../../globalStyle.style';

export const ContentSection = styled(Section)`
  border: 1px solid white;
`;

type ContentDivProps = {
  reverse: boolean;
};

export const ContentDiv = styled.div<ContentDivProps>`
  display: flex;
  justify-content: center;
  flex-flow: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  align-items: center;
  height: 30rem;
`;

export const ContentImageDiv = styled.div`
  height: 24rem;
`;

export const ContentImageImg = styled.img`
  height: 100%;
`;

export const ContentMetadataDiv = styled.div`
  width: 32rem;
  height: 22rem;
  padding: 0 1rem;
`;

export const ContentMetadataP1 = styled.p`
  font-size: 0.8rem;
  color: gray;
  letter-spacing: 0.1rem;
`;
export const ContentMetadataP2 = styled.p`
  font-size: 2.6rem;
  font-weight: 800;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
export const ContentMetadataP3 = styled.p`
  font-size: 1.1rem;
  letter-spacing: 0.06rem;
  color: gray;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export const ContentButton = styled(Button)`
  color: blue;
  border: 2px solid blue;
  border-radius: 0.4rem;
`;
