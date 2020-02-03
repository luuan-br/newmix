import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{        
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        background-color: #e5e6f0;
        font-size: 14px;
        color: #222        
    }

    body, input, button {
        font-family: Roboto, sans-serif;
        -webkit-font-smoothing: antialiased;
    }


`;
