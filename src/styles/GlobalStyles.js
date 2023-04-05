import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
 body {
        margin:0;
        user-select: none;
        background-color: ${(props) => (props.isDark ? '#000000' : '#ffffff')};
        color: ${(props) => (props.isDark ? 'red' : '#000000')};
    }
    img{
        max-width: 100%
        height: auto
    }
`;

export default GlobalStyles;
