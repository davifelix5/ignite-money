import { Container } from "./styles";
import { Summary } from "../Summary";
import { TransactionsTable } from "../TrasactionsTable";

export function Dashboard() {

  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  )
}