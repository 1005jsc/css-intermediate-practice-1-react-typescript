import styled, { createGlobalStyle } from 'styled-components';
import { TypeOfColumn, TypeOfRow, TypeOfSection } from './globalStyleType';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat','Ibarra Real Nova', sans-serif;
  }

  button {
	outline: 0;
	cursor: pointer;
	border: 0;
  background-color: transparent;
}

`;

export const Section = styled.section<TypeOfSection>`
  width: '100%';
  height: 'auto';
  min-width: 'auto';
  max-width: 'auto';
  max-height: 'auto';
  min-height: 'auto';
  background-color: '#071c2f';
  @media screen and (max-width: 768px) {
    padding: '70px 0';
  }
`;
export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: auto;
  padding: 0 50px;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
`;

export const Button = styled.button`
  width: 8rem;
  height: 2.6rem;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 0.5rem;
  color: white;
  font-size: 1.1rem;
  letter-spacing: 0.08rem;
  cursor: pointer;
`;

export default GlobalStyle;
