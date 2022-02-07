import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: -7rem 0 4rem;
  gap: 1rem;

  div {
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    strong {
      font-family: 'Poppins';
      display: block;
      margin-top: 0.875rem;
      font-size: 2rem;
      font-weight: 600;
    }
    
    color: var(--title);
    padding: 1.5rem 2rem;
    border-radius: 5px;
    background: var(--shape);

    &:last-child {
      background-color: var(--green);
      color: var(--shape);
    }
  
  }
`