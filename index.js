const express = require('express')
const app = express()
const exphbs = require('express-handlebars')

//Conexão combanco de dados
const connection = require('./mysqlFile')
const db = require('mysql').createPool(connection)

app.use(express.json())
app.use('/public', express.static('public'))
app.engine('.hbs', exphbs.engine({
  defaultLayout: 'main', extname: 'hbs'
}))
app.set('view engine', '.hbs')
 
app.get('/', (req, res) => {
  res.status(200).render('home')
})
app.get('/', (req, res) => {
  db.query('SELECT * FROM pagamento', (error,id) => {
 if (error) return res.status(500).send(error.sqlMessage)
  })
})
 
app.post('/pagamento', (req, res) => {
  try {
    db.query(`INSERT INTO promo (nome, valor, email) VALUES ('${req.body.nome}'),'${req.body.valor}'), ('${req.body.email}')`, (error) => {
      if (error) return res.status(500).send(error.sqlMessage)
      res.status(200).send()
    })
  } catch (error) {
    res.status(400).send(error)
  }
})

app.listen(3000, () => {
  console.log("Backend executando...")
})