const express = require('express')
const router = express.Router()
const path = require('path')

const basePath = path.join(__dirname, '../templates')

router.get('/caixa', (req, res) =>{
    res.sendFile(`${basePath}/teste.html`)
})

module.exports = router