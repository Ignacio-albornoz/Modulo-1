import React from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';
import { ButtonChangeTheme } from './styled';

export const ChangeTheme = ({ open, setOpen }) => {
  const Icon = open ? BsSun : BsMoon;
  return (
    <>
      <ButtonChangeTheme open={open} onClick={() => setOpen(!open)}>
        <Icon size='1.0rem' border-radius='50%' />
      </ButtonChangeTheme>
    </>
  );
};
