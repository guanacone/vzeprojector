import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
    h1 {
        font-family: Aleo;
    }

    h2 {
        font-family: 'Titillium Web', sans-serif;
        font-weight: 700;
        font-size: 3.5rem;
        color: var(--gray);
    }

    h3 {
        font-family: 'Open Sans';
    }
`;

export default Typography;
