import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme['purple-500']};
  }

  body * {
    font-family: "Roboto", sans-serif;
  }

  body  {
    -webkit-font-smoothing: antialiased;
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme['gray-700']};
    font-size: 1rem;
    line-height: 1.3;

    @media (max-width: 760px) {
      font-size: 0.875rem;
    }

    @media (max-width: 400px) {
      font-size: 0.75rem;
    }
  }

  h1, h2, h3{
    font-family: "Baloo 2", sans-serif;
    font-weight: 800;
    line-height: 1.3;
    font-size: 2rem;
    color: ${(props) => props.theme['gray-800']};
  }

  h1 {
    font-size: 3rem;
    color: ${(props) => props.theme['gray-900']};

    @media (max-width: 760px) {
      font-size: 2.5rem;
    }

    @media (max-width: 400px) {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${(props) => props.theme['gray-900']};

  }

  input, textarea, select {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${(props) => props.theme['gray-600']};
    padding: 0.75rem;
    border: 1px solid ${(props) => props.theme['gray-300']};
    border-radius: 4px;
    background: ${(props) => props.theme['gray-200']};
    transition: border-color .2s, color .2s;
  }

  input:focus, textarea:focus, select:focus {
    border-color: ${(props) => props.theme['yellow-900']};
    color: ${(props) => props.theme['gray-700']};
    box-shadow: none;
  }

   input:valid, textarea:valid, select:valid {
    color: ${(props) => props.theme['gray-700']};
  }

 button {
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.7;
    text-transform: uppercase;

    cursor: pointer;
    
    border: none;
    border-radius: 6px;
    padding: 0 0.5rem;
    width: auto;
    height: 32px;

    color: ${(props) => props.theme['gray-700']};
    background: ${(props) => props.theme['gray-300']};

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    
    transition: background .2s, color .2s;
  }

  button:disabled, button:hover {
    background: ${(props) => props.theme['gray-400']};
    color: ${(props) => props.theme['gray-800']};
  }

  button:disabled {
    cursor:not-allowed;
  }
`
