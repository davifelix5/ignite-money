import styled from 'styled-components'
import { cssVar, lighten } from 'polished'

interface SummaryItemProps {
  profit?: boolean
}

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: -7rem 0 4rem;
  gap: 1rem;
  padding: 0 0.75rem;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    div strong, div small {
      text-align: center;
    }
  }
`

export const SummaryItem = styled.div<SummaryItemProps>`
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
  small {
    display: block;
    font-size: 0.875rem;
    margin-top: 0.25rem;
    color: var(--text);
  }

  color: var(--title);
  padding: 1.5rem 2rem;
  border-radius: 5px;
  background: var(--shape);

  &:last-child {
    background-color: ${
      props => 
        props.profit 
        ? 
         '#33CC95'
        : 
          lighten(0.1, '#E52E4D')
    };
    color: var(--shape);

    small {
      color: var(--shape);
      font-weight: 500;
    }
    
  }
`