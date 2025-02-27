import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :focus{
        outline: 0;
    }
    body{
        background-color: ${colors['black']};
        color: ${colors['white']};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    body, input, textarea, button{
        font-family: 'ULP Custom', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, sans-serif;
        font-size: 1rem;
        font-weight: 400;
    }
`;
