import { createServer, Model, Response } from 'miragejs'

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

    this.delete('/transactions/:id', (schema, request) => {
      const { id } = request.params
      const transaction = schema.find('transaction', id)
      if(!transaction) {
        return new Response(404)
      }
      transaction.destroy()
      return new Response(204)
      
    })
  }
})