import React from 'react';
import { GiHamburgerMenu, GiBookmark } from 'react-icons/gi';
import { RiUser3Fill } from 'react-icons/ri';
import { LayoutWarp, BurgerMenu } from './styled';

const Layout = () => (

  <LayoutWarp>
    <BurgerMenu>
      <button className='burgerMenuBotton' type='button'>
        <GiHamburgerMenu />
      </button>
    </BurgerMenu>
    <div className='logoWrap'>
      <h4>
        Form
        <GiBookmark />
      </h4>
    </div>
    <div className='userIconWrap'>
      <button type='button'>
        <RiUser3Fill />
      </button>
    </div>
  </LayoutWarp>

);

export default Layout;
