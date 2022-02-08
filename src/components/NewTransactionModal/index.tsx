import Modal from 'react-modal'
import { Container, RadioGroup } from './styles'

import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import close from '../../assets/close.svg'
import { ChangeEvent, useState } from 'react'

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

type Type = 'income' | 'outcome'

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [type, setType] = useState<Type>('income')
  const [category, setCategory] = useState('')

  function handleChangeTypeRadio(event: ChangeEvent<HTMLInputElement>) {
    setType(event.target.value as Type)
  }
  
  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
    >
      <Container>
        <h2>Cadastrar transação</h2>
        <button className="closeModalBtn" onClick={onRequestClose}>
          <img src={close} alt="Close" />
        </button>

        <form>
          <div className="inputControl">
            <input 
              type="text" 
              placeholder="Nome" 
              name="name" 
              id="name" 
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="inputControl">
            <input 
              type="text" 
              placeholder="Preço" 
              name="preco" 
              id="preco"
              value={price}
              onChange={e => setPrice(e.target.value)}
            />
          </div>
          <RadioGroup className="inputControl">
            <div className="radioControl">
              <input
                type="radio" 
                name="type" 
                id="income" 
                value="income" 
                checked={type === 'income'}
                onChange={handleChangeTypeRadio} 
                />
              <label htmlFor="income">
                <img src={income} alt="Entrada" />
                <span>Entrada</span>
              </label>
            </div>
            <div className="radioControl">
              <input 
                type="radio" 
                name="type" 
                id="outcome" 
                value="outcome"
                checked={type === 'outcome'} 
                onChange={handleChangeTypeRadio} 
              />
              <label htmlFor="outcome">
                <img src={outcome} alt="Saída" />
                <span>Saida</span>
              </label>
            </div>
          </RadioGroup>
          <div className="inputControl">
            <input 
              type="text" 
              placeholder="Categoria" 
              name="categoria" 
              id="categoria" 
              value={category}
              onChange={e => setCategory(e.target.value)}
            />
          </div>
          <button type="submit">Cadastrar</button>
        </form>
      </Container>
    </Modal>
  )
}