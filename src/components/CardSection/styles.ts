import styled from "styled-components";
import { CardSectionProps } from './types'

export const CardSectionSlide = styled('div')<CardSectionProps>`
  width: 70%;

  & .swiper-button-prev,
  .swiper-button-next {
    width: 20%;
    font-weight: bold;
    color: red; 
  }

  ${
    (props) => props.inFocus && props.inFocus === 2 && window.matchMedia('min-width: 1440px').matches ?
    `& div .swiper-slide-active:not(:first-of-type) > div > div {
      padding: 10% 10% 0 30% !important;
      position: relative;
      left: 80% !important;
  
      & > .closeCard {
        left: auto;
      }
    }`
    :
    ''
  }
`;

