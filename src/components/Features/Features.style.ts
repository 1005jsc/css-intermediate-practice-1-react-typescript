import styled from 'styled-components';
import { Section } from '../../globalStyle.style';

export const FeatureSection = styled(Section)`
  margin: 8rem 0;
`;

export const FeatureMainHeadingH1 = styled.h1`
  text-align: center;
  font-size: 3rem;
  margin: 3rem;
  letter-spacing: 0.2rem;
`;

export const FeatureWrapperDiv = styled.div`
  width: 100%;
  padding: 2rem 2rem;
  background-color: white;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 3rem;
  }

  @media screen and (max-width: 568px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const FeatureCardDiv = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  box-shadow: 0 0 32px 8px #d0d0d0;
`;

export const FeatureIconWrapperDiv = styled.div`
  display: inline-block;
  text-align: center;
  line-height: 8.6rem;
  border: 1px solid black;
  border-radius: 50%;
  width: 6.4rem;
  height: 6.4rem;
  margin: 0.6rem;
`;

export const FeatureCardText1P = styled.p`
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
  letter-spacing: 0.1rem;
`;
export const FeatureCardText2P = styled.p`
  font-size: 0.8rem;
  margin-bottom: 0.8rem;
  letter-spacing: 0.05rem;
  text-align: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
