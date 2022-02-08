import { ChangeEvent, FormEvent, useState } from 'react'
import Modal from 'react-modal'
import { Container, RadioGroup } from './styles'

import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import close from '../../assets/close.svg'

import { api } from '../../services/api'

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

type Type = 'income' | 'outcome'

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [type, setType] = useState<Type>('income')
  const [category, setCategory] = useState('')

  function handleChangeTypeRadio(event: ChangeEvent<HTMLInputElement>) {
    setType(event.target.value as Type)
  }

  function resetInputs() {
    setTitle('')
    setValue(0)
    setType('income')
    setCategory('')
  }

  function handleFormSubmit(event: FormEvent) {
    event.preventDefault()
    
    const transaction = {
      title,
      value,
      type,
      category,
      createdAt: new Date(),
    }
    
    api.post('/transactions', transaction)
      .then(() => {
        onRequestClose()
        resetInputs()
      })
      .catch(() => {
        alert('Erro ao inserir trasação')
      })
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

        <form onSubmit={handleFormSubmit}>
          <div className="inputControl">
            <input 
              type="text" 
              placeholder="Nome" 
              name="title" 
              id="title" 
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          <div className="inputControl">
            <input 
              type="number" 
              placeholder="Preço" 
              name="value" 
              id="value"
              value={value}
              onChange={e => setValue(Number(e.target.value))}
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
              name="category" 
              id="category" 
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