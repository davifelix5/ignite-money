import { Container } from "./styles";

import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <Container>
      <img src={logo} alt="dt.money" />
      <button>Nova transação</button>
    </Container>
  )
}