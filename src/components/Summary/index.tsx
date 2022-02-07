import { Container } from "./styles";

import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import total from '../../assets/total.svg'

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={income} alt="Income" />
        </header>
        <strong>R$15.000</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcome} alt="Outcome" />
        </header>
        <strong>- R$5.000</strong>
      </div>

      <div>
        <header>
          <p>Total</p>
          <img src={total} alt="Total" />
        </header>
        <strong>R$10.000</strong>
      </div>
    </Container>
  )
}