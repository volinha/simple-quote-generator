import { createGlobalStyle } from "styled-components";
import background from '../../images/2725551.jpg'

export const GlobalStyle = createGlobalStyle`
body {
    background: url(${background}) center no-repeat;
    background-size: cover;
    padding: 0;
    margin: 0;
    color:  #332c36;
    font-family: 'Roboto Mono', Roboto, sans-serif;
}`;