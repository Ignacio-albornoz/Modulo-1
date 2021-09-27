import styled from 'styled-components';


export const BurgerMenu = styled.button`
  display: flex;
  align-items: center;
  width: 2.2rem;
  height: 2.2rem;
  min-height: 40px;
  min-width: 40px;
  position: relative;
  padding: 0;
  z-index: 10;
  

  & svg {
    padding:1px;
    border-radius: 50%;
    min-height: 40px;
    min-width: 40px;
    box-shadow: 0 4px 5px rgba(0, 0, 0, .1);


  }

  & svg:hover{
    box-shadow: 0 5px 5px rgba(0, 0, 0, .3);
    background: rgba(0, 0 , 0, 0.03);


  }
`