import Styled, {css, keyframes} from 'styled-components';



const AnimationNavBar = keyframes`
  from {
    top: -50px;
  }
  to {
    top: -2px;
  }
`

export const NavBarContainer = Styled.div`
    display: flex;
    width: 100vw;
    height: 3rem;
    min-height: 50px;
    align-items: center;
    text-align:center;
    justify-content: space-between;
    z-index: 2;
    padding-left: 1.5%;
    padding-right: 3%;
    height: 1.6rem;
    box-shadow: 0 0 6px 1px rgba(0, 0, 0, .2);
    ${props => props.open && css`
      animation: 0.3s ${AnimationNavBar} ease;
      animation-delay: 0s;
      position: open;
      z-index: 6;
      background: none;
      margin-top: -3px;
      height: 1.5rem;
      border: none;
      box-shadow: none;
    `}
`
export const BurgerMenu = Styled.button`
  display: flex;
  align-items: center;

  ${props => props.open && css`
      opacity:0.7;
      background: #fff;
      border-radius: 50%;
      box-shadow: 0 0 2px px rgba(0, 0, 0, .3);

  `}
  
  & svg {
    padding:1px;
    border-radius: 50%;
    color: rgba(0, 0 , 0, 0.75);
    box-shadow: 0 4px 5px rgba(0, 0, 0, .1);
  }
  svg:hover{
    box-shadow: 0 5px 5px rgba(0, 0, 0, .3);
    background: rgba(0, 0 , 0, 0.03);
  }
`

export const Tittle = Styled.h1`
  font-weight: 300;
  letter-spacing: -1.2px;
  text-decoration: none;
  width: 150px;
  left: 0;
  right: 0;
  margin: auto;
  position: absolute;
  ${props => props.open && css`
      opacity:0;
      display:none;
    `}
  :focus {
    outline: none;
  }
  :active {
    color: #000;
  }
`

export const InteractionButtons = Styled.div`
    display:block;
    height: inherit;
    width: 25%;
    ${props => props.open && css`
      opacity:0;
      display:none;
    `}
`