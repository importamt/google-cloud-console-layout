import {createGlobalStyle} from "styled-components";
import reset from "styled-reset"



export const GlobalStyles = createGlobalStyle`
  ${reset}
  
  html > body * {
    font-family: "NotoSansCJKkr", serif;
    font-weight: 400;
  }
  
  ul, li {
    list-style-type: none;
  }
  
  a {
    color: #000000;
    text-decoration: none;
  }
`

