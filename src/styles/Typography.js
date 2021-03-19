import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
    h1 {
        font-family: Aleo;
    }

    h2 {
        font-family: 'Titillium Web', sans-serif;
        font-weight: 700;
        font-size: 3.5rem;
        color: #7e7e7e;
    }

    h3 {
        font-family: 'Open Sans';
    }
`;

export default Typography;
