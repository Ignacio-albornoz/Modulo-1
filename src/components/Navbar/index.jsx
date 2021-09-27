import React, { useState } from 'react';
import { NavBarContainer, Tittle } from './styled';
import { Burger } from '../BurgerMenu/index';
import { ChangeTheme } from '../ChangeTheme/index';

const Navbar = (props) => {
  const [open, setOpen] = useState(false);

  const renderNavbar = () => (
    <NavBarContainer id='navbar' open={open}>
      <Burger open={open} setOpen={setOpen} />
      <Tittle to='/' open={open}>Modulo 1</Tittle>
      <ChangeTheme open={props.active} setOpen={props.setActive} />
    </NavBarContainer>
  );

  return (
    <>
      {renderNavbar()}
    </>
  );
};

export default Navbar;
