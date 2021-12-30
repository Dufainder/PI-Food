import { createGlobalStyle } from 'styled-components';
import img from './components/images/FondoBlack.jpg';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0%;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  width: 100vh;
  background-image :linear-gradient(to right, #54586896, #4f3d5070), url(${img});
  }
`;
export default GlobalStyle;