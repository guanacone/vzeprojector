import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --blue: #00ceff;
        --gray: #7e7e7e;
    }

    * {
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 12px;
    }
    body {
        width: 100vw;
        overflow-x: hidden;
        font-family: Lato, sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 1.6rem;
        color: black;
        line-height: 1.625;
    }

    header {
        margin-top: 60px;
        text-align: center;
    }

    a {
        text-decoration: none;
    }

    .page-width {
        max-width: 80%;
        padding: 0 20px;
        margin: 0 auto;
    }
`;

export default GlobalStyle;
