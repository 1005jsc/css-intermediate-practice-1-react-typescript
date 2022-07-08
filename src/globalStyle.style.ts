import styled, { createGlobalStyle } from 'styled-components';
import { TypeOfColumn, TypeOfRow, TypeOfSection } from './globalStyleType';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  }
`;

export const Section = styled.section<TypeOfSection>`
  padding: 0;
  margin: '';
  background-color: '#071c2f';
  position: '';
  width: '100%';
  min-width: 'auto';
  max-width: 'auto';
  height: 'auto';
  max-height: 'auto';
  min-height: 'auto';
  @media screen and (max-width: 768px) {
    padding: '70px 0';
  }
`;
export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: auto;
  padding: 0 50px;
  /* border: 1px solid black; */
  position: relative;
  z-index: 1;
  @media screen and (max-width: 960px) {
    padding: 0 30px;
    /* background-color: red; */
  }
`;

export const Button = styled.button`
  width: 8rem;
  height: 2.6rem;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 0.5rem;
  color: white;
  font-size: 1rem;
  cursor: pointer;
`;

export default GlobalStyle;
