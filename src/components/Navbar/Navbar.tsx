import React, { useEffect, useState } from 'react';
import { data } from '../../data/NavbarData';
import { GiHamburgerMenu } from 'react-icons/gi';
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
  const [innerWidth, setInnerWidth] = useState<number>(1080);

  const handleResize = () => {
    setInnerWidth(window.innerWidth);
    console.log(innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  useEffect(() => {
    setInnerWidth(window.innerWidth);
  }, []);
  return (
    <Nav id='navbar'>
      <NavbarContainer>
        <NavLogo to='/'>
          <NavIcon src='./assets/logo.png' alt='logo' />
          Gamma
        </NavLogo>

        {innerWidth > 580 ? (
          <NavMenu>
            {data.map((value, index) => {
              return <NavItem key={index}>{value.text}</NavItem>;
            })}
          </NavMenu>
        ) : (
          <GiHamburgerMenu size='3rem' color='#fff' />
        )}
      </NavbarContainer>
    </Nav>
  );
};
export default Navbar;
