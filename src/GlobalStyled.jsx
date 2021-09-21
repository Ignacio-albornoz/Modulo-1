import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
    
    button {
        background: transparent;
        border: 0;
        outline: 0;
    }

    body {
        background: #fefefe;
        height: 100vh;
        margin: 0 auto;
        max-width: 100vw;
        overscroll-behavior: none;
        width: 100%;
    }

    #app {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
        overflow-x: hidden;
        min-height: 100vh;
        padding-bottom: 10px;
    }
    @media (max-height: 600px) {
    font-size: 12px;
  }
}
`;

export default GlobalStyle;
