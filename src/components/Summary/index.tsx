import { useTrasactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

type Type = 'income' | 'outcome'

export function Summary() {

  const { transactions } = useTrasactions()

  function calculateTransactionsTotalValueByType(type: Type) {
    const totalValue = transactions.reduce((acc, transaction) => { 
      return transaction.type === type ? acc + transaction.value : acc
    }, 0)

    return totalValue
  }

  function formatCurrency(number: number) {
    const formatedValue = new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL'
    }).format(number)

    return formatedValue
  }

  const income = calculateTransactionsTotalValueByType('income')
  const outcome = calculateTransactionsTotalValueByType('outcome')

  const total = income - outcome 

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Income" />
        </header>
        <strong>{formatCurrency(income)}</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Outcome" />
        </header>
        <strong>- {formatCurrency(outcome)}</strong>
      </div>

      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>{formatCurrency(total)}</strong>
      </div>
    </Container>
  )
}