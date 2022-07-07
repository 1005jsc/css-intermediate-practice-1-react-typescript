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
  padding: ' 10rem 0';
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
  background-color: blue;
  border: 1px solid white;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 960px) {
    padding: 0 30px;
    background-color: red;
  }
`;

export const Row = styled.div<TypeOfRow>`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : '')};
  align-items: ${({ align }) => (align ? align : '')};
  gap: ${({ gap }) => (gap ? gap : '')};
  padding: '0';
  margin: '';
  width: '100%';
  min-width: 'auto';
  max-width: 'auto';
  height: 'auto';
  max-height: 'auto';
  min-height: 'auto';
  flex-wrap: ${({ wrap }) => (wrap ? wrap : '')};
`;

export const Column = styled.div<TypeOfColumn>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.justify ? props.justify : '')};
  align-items: ${({ align }) => (align ? align : '')};
  gap: ${({ gap }) => (gap ? gap : '')};
  padding: ${({ padding }) => (padding ? padding : '')};
  margin: ${({ margin }) => (margin ? margin : '')};
  position: ${({ position }) => (position ? position : '')};
  width: ${({ width }) => (width ? width : 'auto')};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
  height: ${({ height }) => (height ? height : 'auto')};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
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
