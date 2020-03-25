const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const app = express()

app.use(cors())
app.use(express.json()) // Para o navegador transformar json em JS
app.use(routes)

app.listen(3333)