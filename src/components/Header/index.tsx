import { Container } from "./styles";

import logo from '../../assets/logo.svg'

interface HeaderProps {
  onOpenNewTransactionModal: () => void
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <img src={logo} alt="dt.money" />
      <button onClick={onOpenNewTransactionModal}>Nova transação</button>
    </Container>
  )
}