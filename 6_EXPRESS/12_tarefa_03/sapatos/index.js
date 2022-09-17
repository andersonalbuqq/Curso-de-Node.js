const express = require('express')
const router = express.Router()
const path = require('path')

const basepath = path.join(__dirname, '../templates')

router.get('/tenis', (req, res) => {
    res.sendFile(`${basepath}/tenis.html`)
})

module.exports = router