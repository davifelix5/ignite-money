import styled from 'styled-components'

export const Container = styled.header`
  background-color: var(--blue);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 10rem 8.5rem;
  
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
`