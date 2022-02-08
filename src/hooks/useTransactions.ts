import { useContext } from "react";
import { TransactionsContext } from "../TransactionContext";

export function useTrasactions() {
  return useContext(TransactionsContext)
}