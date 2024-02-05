import styled from "styled-components";
import { CardProps, FullCardDescriptionProps } from "./types";

export const CardContainer = styled('div')<CardProps>`
  max-width: 350px;
  height: 60vh;

  z-index: 1;
  
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 2rem;
`;

export const CardDescription = styled.div`
  min-height: 50%;

  padding: .5rem 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  top: 50%;

  color: #fff;
  
  background-image: linear-gradient(to bottom, rgb(256,0,0,1), rgb(256,0,0,.2) );
  border-radius: 2rem;

  & h2{
    text-align: center;
  }

  & p{
    font-family: 'axiformaThin';
    font-size: .8rem;
  }
  & :last-child{
    margin-top: auto;
    font-family: 'axiformaThin';
    font-size: 1.2rem;

    cursor: pointer;

    transition: .3s;
    
    &:hover {
      transform: scale(1.1);
    }
  }  
`;

export const FullCardDescription = styled('div')<FullCardDescriptionProps>`
  display: block;

  width: 125%;
  height: 100%;

  overflow-y: auto;

  padding: 10% 10% 0 30%;

  position: relative;
  left: 80%;
  z-index: -1;
  ${(props) => props.index > 1 ?
    `
    padding: 10% 30% 0 10%;
    left: -100%;
    & > .closeCard{
      position: absolute;
      left: 5%;
      bottom: 5%;
    }
    @media (max-width: 1440px) {
      width: 100%;
      height: 100%;
      overflow-y: auto;
  
      padding: 10%;
      
      position: relative;
      left: 0%;
      z-index: 1;

      & > .closeCard{
        position: absolute;
        left: auto;
      }
    }
    `
   : 
   ''
   }

  background-image: linear-gradient(to right, #ff0000, #550000);
  border-radius: 2rem;

  color: #fff;

  & p {
    margin: 1rem 0;
    font-family: 'axiformaThin';
  }

  & h2:nth-of-type(2) {
    margin: 1rem 0 .5rem;
    font-family: 'axiformaLight';
  }

  & h4 {
    margin-top: 1rem;
  }

  & ul li {
    list-style: none;
    font-family: 'axiformaThin';
  }

  & > .closeCard{
    position: absolute;
    right: 5%;
    bottom: 5%;

    cursor: pointer;
  }

  @media (max-width: 1440px) {
    width: 100%;
    height: 100%;
    overflow-y: auto;

    padding: 10%;
    
    position: relative;
    left: 0%;
    z-index: 1;
  }
`;

export const CloseCard = styled.span`
  display: block;

  width: 150%;
  height: 100%;

  padding: 15% 0 0 30%;

  position: relative;
  left: 80%;
  z-index: -1;

  background-image: linear-gradient(to right, #ff0000, #550000);
  border-radius: 2rem;

  color: #fff;
`;


