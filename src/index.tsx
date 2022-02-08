import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal'
import { createServer, Model } from 'miragejs'
import App from './App';

Modal.setAppElement('#root')

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1, 
          title: 'Salario', 
          value: 5000, 
          type: 'income', 
          category: 'Trabalho', 
          createdAt: new Date('2022-02-06 10:20:00')
        },
        {
          id: 2, 
          title: 'Almoço', 
          value: 30, 
          type: 'outcome', 
          category: 'Alimenção', 
          createdAt: new Date('2022-02-05 19:40')
        },
        {
          id: 3, 
          title: 'Aluguel', 
          value: 1500, 
          type: 'outcome', 
          category: 'Despesa fixa', 
          createdAt: new Date('2022-02-04 18:20')
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })
    
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', {
        ...data,
        createdAt: new Date()
      })
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
