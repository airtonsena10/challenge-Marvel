import styled from 'styled-components';
import { MobileMenuProps } from './types';

export const HeaderContainer = styled.header`
  max-height: 15%;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  padding: 1.5rem 3rem;

  position: relative;
  z-index: 10;
  
  background-color: #000;
  box-shadow: 0 .1rem 1rem .01rem #ff0000;

  & .profileBox{
    display: flex;
    align-items: center;
    gap: 1rem;

    margin-right: 2rem;

    & span{
      font-family: 'axiformaLight';
      font-size: 1.25rem;
      color: #744343;
      cursor: pointer;
    }
  }

  @media (max-width: 600px) {
    & .profileBox {
      width: 100%;
      justify-content: center;
      margin: 0;
    }
  }
`;

export const MenuBtn = styled('button')<MobileMenuProps>`
  margin: 0 2rem 0 auto;
  
  display: none;

  background: none;

  cursor: pointer;
  
  & span {
    width: 1.5rem;
    color: #fff;
    border-top: 2px solid;
  }

  & span::before, & span::after {
    content: '';
    display: block;
    width: 1.5rem;
    height: 2px;
    margin-top: 5px;
    position: relative;
    background-color: currentColor;
    transition: .3s;
  }

  ${(props) => props.mobileMenu ? 
  `
  & span {
    border-top-color: transparent;
  }
  & span::before{
    transform: rotate(135deg);
  }
  & span::after{
    transform: rotate(-135deg);
    top: -7px;
  }
  `
  :
  ''
  }

  @media (max-width: 1180px) {
    display: flex;
  }
  
`;

export const Menu = styled('ul')<MobileMenuProps>`
  font-size: 2rem;

  display: flex;
  align-items: center;
  gap: 7rem;

  list-style: none;

  margin: 0 2rem 0 auto;


  & li a{
    color: #707070;
  }

  @media (max-width: 1180px) {
    padding: 1rem;

    position: absolute;
    right: 20%;
    top: 100%;
    
    flex-direction: column;
    gap: 1rem;
    
    background-color: #000;
    border: 1px solid #ff0000;
    border-radius: 1rem;

    transition: .3s;
    ${(props) => props.mobileMenu ? 
    `opacity: 1;
    pointer-events: all;
    transform: translate3d(0,0,0);` 
    : 
    `opacity: 0;
    pointer-events: none;
    transform: translate3d(0,-50px,0);` 
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    
    right: auto;
    top: 50%;
    left: 0;
  }
`;

export const MarvelLogo = styled.h1`
  font-family: 'marvel';
  font-size: 4rem;
  font-weight: normal;
  color: #fff;
  
  align-self: center;
  
  height: 3.6rem;
  padding: 0 .5rem;
  background-color: #ff0000;
`;
