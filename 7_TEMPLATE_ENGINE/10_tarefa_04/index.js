const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const destinos = require("./destinos")

const hbs = exphbs.create({
    partialsDir: ['views/partials']
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use('/destinos', destinos)

app.use(express.static('public'))

app.get('/', (req, res) =>{

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

    res.render('home',{destinos})
})

app.listen(3000, ()=>{
    console.log('App rodando na porta 3000')
})