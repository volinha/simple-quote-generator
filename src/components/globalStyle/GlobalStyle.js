import { createGlobalStyle } from "styled-components";
import background from '../../images/manus.jpg'

export const GlobalStyle = createGlobalStyle`
body {
    background: url(${background}) center no-repeat;
    background-size: cover;
    padding: 0;
    margin: 0;
    color:  #EEE;
    font-family: 'Roboto Mono', Roboto, sans-serif;
}`;