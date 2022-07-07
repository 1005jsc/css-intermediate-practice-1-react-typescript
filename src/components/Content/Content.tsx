import React from 'react';
import { Container } from '../../globalStyle.style';
import { ContentSection } from './Content.style';

type ContentProps = {
  headline: string;
  description: string;
  buttonLabel?: string;
};

const Content = ({ headline, description, buttonLabel }: ContentProps) => {
  return (
    <ContentSection>
      <Container>
        <h2>{buttonLabel}</h2>
        <h2>{headline}</h2>
        <h2>{description}</h2>
      </Container>
    </ContentSection>
  );
};
export default Content;
