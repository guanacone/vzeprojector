import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --blue: #00ceff;
        --gray: #7e7e7e;
    }

    html {
        font-size: 10px;
    }
    body {
        width: 100vw;
        overflow-x: hidden;
        padding-right: 15px;
        font-family: Lato, sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 1.6rem;
        color: black;
        line-height: 1.625;
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalStyle;
