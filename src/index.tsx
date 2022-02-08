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
          createdAt: new Date()
        },
        {
          id: 2, 
          title: 'Almoço', 
          value: 30, 
          type: 'outcome', 
          category: 'Alimenção', 
          createdAt: new Date()
        },
        {
          id: 3, 
          title: 'Aluguel', 
          value: 1500, 
          type: 'outcome', 
          category: 'Despesa fixa', 
          createdAt: new Date()
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
      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
