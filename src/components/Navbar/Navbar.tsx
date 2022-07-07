import React from 'react';
import { data } from '../../data/NavbarData';
import {
  Nav,
  NavbarContainer,
  NavIcon,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from './Navbar.style';

const Navbar = () => {
  return (
    <Nav id='navbar'>
      <NavbarContainer>
        <NavLogo to='/'>
          <NavIcon src='./assets/logo.png' alt='logo' />
          Delta
        </NavLogo>

        <NavMenu>
          {data.map((value, index) => {
            return <NavItem key={index}>{value.text}</NavItem>;
          })}
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};
export default Navbar;
