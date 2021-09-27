import React, { useState } from 'react'
import {NavBarContainer, Tittle, InteractionButtons} from './styled'
import {Burger} from '../BurgerMenu/index'


const Navbar = () => {
  const [open, setOpen] = useState(false)
  

  const renderNavbar = ( ) => (
    <NavBarContainer open={open}>
      <Burger open={open} setOpen={setOpen}/>
        <Tittle to='/' open={open}>Bicubica</Tittle>
    </NavBarContainer>
  )

  return(
    <>
        {renderNavbar()}
    </>
  )
  }

  export default Navbar;
