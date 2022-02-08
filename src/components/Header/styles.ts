import styled from 'styled-components'

export const Container = styled.header`
  background-color: var(--blue);
  padding: 1rem 0 12rem;
  
  @media (max-width: 400px) {
    padding-bottom: 10rem;
    div {
      flex-direction: column;
    }
    button {
      margin-top: 1rem;
    }
  }
  
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1120px;
    padding: 0 0.75rem;
    margin: 0 auto;
    button {
      background-color: var(--blue-light);
      padding: 0.75rem 2rem;
      border-radius: 5px;
      font-weight: 600;
      line-height: 24px;
      color: var(--shape);
  
      &:hover {
        filter: opacity(0.6);
      }
  
      transition: filter 0.2s;
    }
  }
`