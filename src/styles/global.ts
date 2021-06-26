import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   
 }

 body {
   background: ${props => props.theme.colors.background};
   color: ${props => props.theme.colors.text};
 }

textarea:focus, 
input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
}
 body,
 input,
 button,
 textarea {
   font: 400 16px 'Roboto', sans-serif;
 }
`