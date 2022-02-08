import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal'
import { createServer } from 'miragejs'
import App from './App';

Modal.setAppElement('#root')

createServer({
  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return [
        {
          id: 1, 
          title: 'Salario', 
          amount: 5000, 
          type: 'income', 
          category: 'Trabalho', 
          createdAt: new Date()
        },
        {
          id: 2, 
          title: 'Almoço', 
          amount: 30, 
          type: 'outcome', 
          category: 'Alimenção', 
          createdAt: new Date()
        },
        {
          id: 3, 
          title: 'Aluguel', 
          amount: 1500, 
          type: 'outcome', 
          category: 'Despesa fixa', 
          createdAt: new Date()
        },
      ]
    })    
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
