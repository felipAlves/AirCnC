const express = require('express')
const routes = require('./routes')
const cors = require('cors')

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://felipealves:felipealves@cluster0.wsu5r.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const app = express()


// GET, PUT, POST, DELETE

// req.query = Acessar query params (para Filtros)
// req.params = Acessar route params (para edição, delete)

app.use(cors())
app.use(express.json())
app.use(routes)


app.listen(3333)