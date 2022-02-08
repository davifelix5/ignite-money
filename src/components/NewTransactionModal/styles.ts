import styled from 'styled-components'
import { darken, lighten, cssVar } from 'polished'

export const Container = styled.div`
  h2 {
    color: var(--title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  form {

    input {
      width: 100%;
      padding: 1rem 1.25rem;
      background-color: var(--input-background);
      color: var(--title);
      &::placeholder {
        color: var(--text);
      }
      border-radius: 5px;
      border: 1px solid #D7D7D7;
      &:focus {
        outline: 1px solid var(--title);
      }
    }

    button[type="submit"] {
      margin-top: 1.5rem;
      width: 100%;
      background-color: var(--green);
      padding: 1.25rem 0;
      font-weight: 600;
      color: var(--shape);
      border-radius: 0.5rem;
      &:hover {
        filter: brightness(0.9)
      }
      transition: filter 0.2s;
    }

    .inputControl + .inputControl {
      margin-top: 1rem;
    }

  }
`

export const RadioGroup = styled.div`

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;

  input {
    display: none;
  }
  
  label {
    
    &:hover {
      border-color: ${darken(0.1, '#d7d7d7')};
    }
    
    span {
      margin-left: 0.5rem;
    }

    border: 1px solid var(--text);
    border-radius: 5px;
    padding: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: border-color 0.2s;
  }

  input:checked + label {
    
    
    &[for="income"] {
      background-color: ${lighten(0.4, cssVar('--green', '#00ff00') as string)};
    }

    &[for="outcome"] {
      background-color: ${lighten(0.4, cssVar('--red', '#ff0000') as string)};
    }

  }
`