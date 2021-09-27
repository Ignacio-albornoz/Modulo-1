import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        color: ${(props) => props.themes.TextColor};
        background-color: ${(props) => props.themes.Background};
    }
    
    button {
        background: transparent;
        border: 0;
        outline: 0;
        & svg {
            color: ${(props) => props.themes.TextColor};
        }
    }

    body {
        background: #fefefe;
        background-color: ${(props) => props.themes.Background};
        height: 100vh;
        margin: 0 auto;
        max-width: 100vw;
        overscroll-behavior: none;
        width: 100%;
        &{
            background-color: ${(props) => props.themes.Background};
        }
    }

    #navbar{
        background: ${(props) => props.themes.SecondaryBackgroundColor}
    }


    form {
        background: ${(props) => props.themes.SecondaryBackgroundColor};

    }

    input {
        background: ${(props) => props.themes.Background};
        color: ${(props) => props.themes.TextColor};
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
