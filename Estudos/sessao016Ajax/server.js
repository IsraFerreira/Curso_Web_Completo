const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/teste', (req, res) => res.send('Ok')) //quando vier uma requisição pela URL /teste 
app.listen(8080, () => console.log('Executando...'))