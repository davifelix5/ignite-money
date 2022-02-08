import { useTrasactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

export function TransactionsTable() {

  const { transactions } = useTrasactions()

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => {

            const date = new Date(transaction.createdAt)
            const value = Intl.NumberFormat('pt-br', {
              style: 'currency',
              currency: 'BRL'
            }).format(transaction.value)

            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {transaction.type === 'outcome' && '- '}{value}
                </td>
                <td>{transaction.category}</td>
                <td>{date.toLocaleDateString('pt-br')}</td>
              </tr>
            )
            
          })}
        </tbody>
      </table>
    </Container>
  )
}