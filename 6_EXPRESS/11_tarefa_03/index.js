const express = require('express')
const app = express()
const port = 5000

const path = require('path')
const basePath = path.join(__dirname, 'templates')

const produtos = require("./produtos")

app.use(express.json())
app.use(express.static('public'))
app.use('/produtos', produtos)

app.get('/', (req, res) => {
    console.log(`${basePath}/index.html`)
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta: ${port}`)
})