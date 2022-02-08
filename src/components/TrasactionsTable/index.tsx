import { useTrasactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

import deleteImg from '../../assets/delete.svg'

export function TransactionsTable() {

  const { transactions, deleteTransaction } = useTrasactions()

  function handleDeleteTransaction(transactionId: number) {
    if (!window.confirm('Você realmente deseja apagar essa transação?')) {
      return
    }
    deleteTransaction(transactionId)
  }

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
            <th className="delete">Excluir</th>
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
                <td className="delete">
                  <button onClick={() => handleDeleteTransaction(transaction.id)}>
                    <img src={deleteImg} alt="Delete" />
                  </button>
                </td>
              </tr>
            )
            
          })}
        </tbody>
      </table>
    </Container>
  )
}