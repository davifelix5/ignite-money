import { useTrasactions } from "../../hooks/useTransactions";
import { Container, SummaryItem } from "./styles";

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

  function getLastTransactionDateByType(type: Type) {
    const [ lastTransactionOfType ] = transactions
      .filter((transaction) => transaction.type === type)
      .slice(-1)

    return new Date(lastTransactionOfType?.createdAt)
      .toLocaleDateString('pt-br')
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
 
  const lastIncomeDate = getLastTransactionDateByType('income')
  const lastOutcomeDate = getLastTransactionDateByType('outcome')

  const firstTransaction = transactions[0]
  const firstTransactionDate = new Date(firstTransaction?.createdAt)
    .toLocaleDateString('pt-br')
    
  const lastTransaction = transactions[transactions.length - 1]
  const lastTransactionDate = new Date(lastTransaction?.createdAt)
    .toLocaleDateString('pt-br')

  return (
    <Container>
      <SummaryItem>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Income" />
        </header>
        <strong>{formatCurrency(income)}</strong>
        <small>Ultima entrada no dia {lastIncomeDate}</small>
      </SummaryItem>

      <SummaryItem>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Outcome" />
        </header>
        <strong>- {formatCurrency(outcome)}</strong>
        <small>Ultima saída no dia {lastOutcomeDate}</small>
      </SummaryItem>

      <SummaryItem profit={total >= 0}>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>{formatCurrency(total)}</strong>
        <small>De {firstTransactionDate} até {lastTransactionDate}</small>
      </SummaryItem>
    </Container>
  )
}