import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 0.75rem;
  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    color: var(--text);
  }

  td {
    border-radius: 5px;
    padding: 1.25rem 1rem;
    background-color: var(--shape);
  }
  th {
    padding: 0 1rem 0.5rem;
    text-align: left;
    font-weight: 400;
  }

  td.delete {
    padding: 1.25rem 0;

    display: flex;
    align-items: center;
    justify-content: center;

    button {
      background: none;
    }
    &:hover {
      img {
        transform: scale(1.1)
      }
    }
  }
  th.delete {
    padding: 0 0 0.5rem;
    text-align: center;
  }

  td.income {
    color: var(--green);
  }
  td.outcome {
    color: var(--red);
  }

  @media (max-width: 400px) {
    th:nth-child(4), td:nth-child(4) {
      display: none;
    }
  }

  @media (max-width: 800px) {
    th:nth-child(3), td:nth-child(3) {
      display: none;
    }
  }
`