import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs'
import App from './App';

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
          description: 'Salário mensal'
        },
        {
          id: 2, 
          title: 'Almoço', 
          amount: 30, 
          type: 'outcome', 
          category: 'Alimenção', 
          description: 'Almoço fora'
        },
        {
          id: 3, 
          title: 'Aluguel', 
          amount: 1500, 
          type: 'outcome', 
          category: 'Despesa fixa', 
          description: 'Pagamento do aluguel'
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
