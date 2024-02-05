import styled from 'styled-components';
import bgImageUrl from '../../assets/images/bg.png';

import { FilterProps } from './types';

export const MoviesContainer = styled.div`
  width: 100vw;
  height: 90vh;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  background-color: #000;
  background-image: url(${bgImageUrl});
  background-position: center;
  background-size: cover;
`;

export const Filter = styled('div')<FilterProps>`
  width: 10rem;
  height: ${(props) => props.open ? 'fit-content' : '2.75rem'};

  margin-left: 15%;

  align-self: start;
  display: flex;
  flex-direction: column;

  position: absolute;
  top: 10%;
  left: 0%;
  z-index: 5;
  
  color: #ff0000;
  
  border-radius: .75rem;
  border: 1px solid #ff0000;
  background-color: #000;

  cursor: pointer;

  & div{
    &:hover {
      border-radius: .75rem;
      background-color: #fff2;
    }
  }
`;

export const Choose = styled.div`
  padding: .5rem 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const Option = styled('div')<FilterProps>`
  padding: .5rem 1rem;

  opacity: ${(props) => props.open ? 1 : 0};

  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;