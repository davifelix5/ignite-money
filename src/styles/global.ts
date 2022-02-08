import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;

    --blue: #5429CC;
    --blue-light: #6933FF;
    --green: #33CC95;
    --red: #E52E4D;

    --shape: #FFFFFF;

    --title: #363F5F;
    --text: #969CB2;
    --input-background: #E7E9EE;

  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased
  }

  body, input, text-area, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  html {
    
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
    
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  button {
    cursor: pointer;
    border: none;
  }

  .react-modal-overlay {
    position: fixed;
    top: 0;
    right: 0;
    background: rgba(0,0,0,0.4);
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-modal-content {
    position: relative;
    background-color: var(--background);
    width: min(576px, 95vw);
    padding: 2rem 4rem;
    border-radius: 5px;

    button.closeModalBtn {
      position: absolute;
      background: none;
      top: 1rem;
      right: 1rem;
      &:hover {
        transform: scale(1.1)
      }
      transition: filter 0.2s;
    }
  }
`