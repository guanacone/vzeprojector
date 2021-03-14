import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 10px;
    }
    body {
        font-family: Lato, sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 1.6rem;
        color: black;
        line-height: 1.625;
    }
`;

export default GlobalStyle;
