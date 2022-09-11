import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap');

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
    }

    html {
        font-size: 62.5%;
    }

    a {
        text-decoration: none;
    }
`;

export const theme = {
  grey: "#F0F0F0",
  white: "#FFFFFF",
  aqua: "#43DDE6",
  darkBlue: "#364F6B",
  dark: "#333333",
};

export default GlobalStyles;
