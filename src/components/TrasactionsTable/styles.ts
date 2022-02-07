import styled from 'styled-components'

export const Container = styled.div`
  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    color: var(--text);
  }
  td {
    border-radius: 5px;
    padding: 1.25rem 2rem;
    background-color: var(--shape);
  }
  th {
    padding: 0 2rem 0.5rem;
    text-align: left;
    font-weight: 400;
  }
  td.income {
    color: var(--green);
  }
  td.outcome {
    color: var(--red);
  }
`