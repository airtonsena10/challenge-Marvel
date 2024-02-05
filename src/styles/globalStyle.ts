import { createGlobalStyle } from 'styled-components';
import marvelUrl from '../assets/fonts/marvel-regular.ttf';
import axiformaBoldUrl from '../assets/fonts/axiforma-bold.otf';
import axiformaMediumUrl from '../assets/fonts/axiforma-medium.otf';
import axiformaLightUrl from '../assets/fonts/axiforma-light.otf';
import axiformaThinUrl from '../assets/fonts/axiforma-thin.otf';

 const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'marvel';
    src: url(${marvelUrl});
  }
  @font-face {
    font-family: 'axiformaBold';
    src: url(${axiformaBoldUrl});
  }
  @font-face {
    font-family: 'axiformaMedium';
    src: url(${axiformaMediumUrl});
  }
  @font-face {
    font-family: 'axiformaLight';
    src: url(${axiformaLightUrl});
  }
  @font-face {
    font-family: 'axiformaThin';
    src: url(${axiformaThinUrl});
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'axiformaMedium';
  }

  body{
    overflow: hidden;
  }

  a{
    text-decoration: none;
  }
`;

export default GlobalStyle;
 