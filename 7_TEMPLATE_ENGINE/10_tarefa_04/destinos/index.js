const express = require('express')
const router = express.Router()
const path = require('path')

const basePath = path.join(__dirname,'../views')

router.get('/:id', (req, res) =>{
    const id = parseInt(req.params.id)

    const destinos = [
        {
            name:"João Pessoa",
            img:1,
            valor: 269.99
        },
        {
            name:"Rio de Janeiro",
            img:2,
            valor: 799.99
        },
        {
            name:"Recife",
            img:3,
            valor: 150.99
        },
        {
            name:"São Paulo",
            img:4,
            valor: 699.99
        },
        {
            name:"Brasília",
            img:5,
            valor: 269.98
        },
        {
            name:"Maceió",
            img:6,
            valor: 199.97
        }
    ]

    var viagem = {}

    switch(id){
        case 1: 
            viagem = destinos[0]
            break 
        case 2: 
            viagem = destinos[1]
            break 
        case 3: 
            viagem = destinos[2]
            break 
        case 4: 
            viagem = destinos[3]
            break 
        case 5: 
            viagem = destinos[4]
            break 
        case 6: 
            viagem = destinos[5]
            break 
    }
    res.render(`${basePath}/viagem.handlebars`, {viagem})
})

module.exports = router