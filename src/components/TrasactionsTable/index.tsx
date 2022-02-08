import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transaction {
  id: number
  type: 'income' | 'outcome',
  category: string
  title: string
  value: number
  createdAt: string
}

interface TransactionResponse {
  transactions: Transaction[]
}

export function TransactionsTable() {

  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get<TransactionResponse>('/transactions')
      .then(response => {
        setTransactions(response.data.transactions)
      })
  }, [])

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
                <td>{transaction.title}</td>
                <td>{date.toLocaleDateString('pt-br')}</td>
              </tr>
            )
            
          })}
        </tbody>
      </table>
    </Container>
  )
}