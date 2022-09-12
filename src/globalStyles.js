import { createGlobalStyle } from "styled-components";
import Maglony from "./assets/Maglony.ttf";

export const theme = {
  grey: "#F0F0F0",
  white: "#FFFFFF",
  aqua: "#43DDE6",
  darkBlue: "#364F6B",
  dark: "#333333",
  lineColor: "#D9D9D9",
};

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: Maglony;
        src: url(${Maglony});
    }


    *,*::after,*::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 30px 50px 0;
        overflow-x: hidden;
        font-size: 1.6rem;
        caret-color: rgba(0,0,0,0);
        color: ${theme.dark};
    }

    html {
        font-size: 62.5%;
    }

    a {
        text-decoration: none;
        color: ${theme.dark};
    }

    @keyframes moveUp {
        0%{
            opacity: 0;
            transform: translateY(3rem);
        }
        
        100%{
            opacity: 1;
            transform: translate(0);
        }
    }
`;

export default GlobalStyles;
