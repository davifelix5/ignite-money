import { useEffect } from "react";
import { Container } from "./styles";
import { Summary } from "../Summary";
import { TransactionsTable } from "../TrasactionsTable";
import { api } from "../../services/api";

export function Dashboard() {

  useEffect(() => {
    api.get('transactions').then(response => {
      console.log(response.data)
    })
  }, [])

  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  )
}