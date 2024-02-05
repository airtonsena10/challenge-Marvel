import styled from 'styled-components';
import bgImageUrl from '../../assets/images/bg.png'

export const ComicsContainer = styled.div`
  width: 100vw;
  height: 90vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #000;
  background-image: url(${bgImageUrl});
  background-position: center;
  background-size: cover;
`;