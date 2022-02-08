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

  color: var(--title);
  padding: 1.5rem 2rem;
  border-radius: 5px;
  background: var(--shape);

  &:last-child {
    background-color: ${
      props => 
        props.profit 
        ? 
          cssVar('--green', '#00ff00') 
        : 
          lighten(0.1, cssVar('--red', '#ff0000') as string)
    };
    color: var(--shape);
    
  }
`