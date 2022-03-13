import { createGlobalStyle } from 'styled-components';
import img from './components/images/FondoBlack.jpg';

// #F2F2F2
// #8C8C8C
// #595959
// #262626
// #0D0D0D


const GlobalStyle = createGlobalStyle`
  body {
  margin: 0%;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  /* width: 100vh; */
  background-image :linear-gradient(to right, #54586896, #4f3d5070), url(${img});
  }
`;
export default GlobalStyle;