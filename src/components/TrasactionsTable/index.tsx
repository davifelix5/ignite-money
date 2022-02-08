import { Container } from "./styles";

export function TransactionsTable() {
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
          <tr>
            <td>Desenvolvimento de site</td>
            <td className="income">R$12.000,00</td>
            <td>Trabalho</td>
            <td>07/02/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="outcome">R$1.200,00</td>
            <td>Despesas fixas</td>
            <td>06/02/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}