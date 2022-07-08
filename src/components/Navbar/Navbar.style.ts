import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../../globalStyle.style';

export const Nav = styled.nav`
  height: 80px;
  width: 100%;
  background-color: transparent;
  position: absolute;
  top: 0;
  margin: 0;
`;

export const NavbarContainer = styled(Container)`
  height: 100%;
  background-color: transparent;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavLogo = styled(Link)`
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  z-index: 50;
`;

export const NavIcon = styled.img`
  margin-right: 1rem;
  width: 3rem;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin: 0;
  /* width: 100%; */
`;

export const NavItem = styled.li`
  cursor: pointer;
  font-size: 1.3rem;
  margin-left: 1.2rem;
  margin-right: 1.2rem;
`;

export const NavLinks = styled(Link)``;
