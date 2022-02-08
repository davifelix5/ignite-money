import { createContext, ReactNode, useContext, useEffect, useState } from "react";

import { api } from "../services/api";

interface Transaction {
  id: number
  type: 'income' | 'outcome',
  category: string
  title: string
  value: number
  createdAt: string
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionGetResponse {
  transactions: Transaction[]
}

interface TransactionPostResponse {
  transaction: Transaction
}

interface TransactionContextData {
  transactions: Transaction[],
  addTransaction: (transaction: TransactionInput) => Promise<void>
}

interface TransactionContextProviderProps {
  children: ReactNode
}

const TransactionsContext = createContext({} as TransactionContextData)

export function TransactionsContextProvider({ children }: TransactionContextProviderProps) {

  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get<TransactionGetResponse>('/transactions')
      .then(response => {

        function sortByDateAcs(transaction1: Transaction, transaction2: Transaction) {
          const timeTransaction1 = new Date(transaction1.createdAt).getTime()
          const timeTransaction2 = new Date(transaction2.createdAt).getTime()
          return timeTransaction1 - timeTransaction2
        }

        setTransactions(response.data.transactions.sort(sortByDateAcs))
      })
  }, [])

  async function addTransaction(transaction: TransactionInput) {
    const response = await api.post<TransactionPostResponse>('/transactions', transaction)
    setTransactions(previousTransactions => [
      ...previousTransactions,
      response.data.transaction
    ])
  }

  return (
    <TransactionsContext.Provider value={{
      transactions,
      addTransaction,
    }}>
      {children}
    </TransactionsContext.Provider>
  )

}

export function useTrasactions() {
  return useContext(TransactionsContext)
}