import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
    h1, h2 {
        color: var(--gray);
        font-family: 'Titillium Web', sans-serif;
        line-height: 1.225;
        margin: 0
    }
`;

export default Typography;
