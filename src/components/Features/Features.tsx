import React from 'react';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { Container } from '../../globalStyle.style';
import {
  FeatureCardDiv,
  FeatureCardText1P,
  FeatureCardText2P,
  FeatureIconWrapperDiv,
  FeatureMainHeadingH1,
  FeatureSection,
  FeatureWrapperDiv,
} from './Features.style';
import { featuresData } from '../../data/FeaturesData';

const Features = () => {
  return (
    <FeatureSection position='relative'>
      <Container>
        <FeatureMainHeadingH1>What We Offer</FeatureMainHeadingH1>

        <FeatureWrapperDiv>
          {featuresData.map((data, index) => (
            <FeatureCardDiv key={index}>
              <FeatureIconWrapperDiv>{data.icon}</FeatureIconWrapperDiv>
              <FeatureCardText1P>{data.name}</FeatureCardText1P>
              <FeatureCardText2P>{data.description}</FeatureCardText2P>
            </FeatureCardDiv>
          ))}
        </FeatureWrapperDiv>
      </Container>
    </FeatureSection>
  );
};
export default Features;
