const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
    partialsDir: ['views/partials'],
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {

    const itens = ["item a", "item b", "item c"]

    res.render('dashboard', {
        itens
    })
})

app.get('/post', (req, res) => {
    const post = {
        title: 'Aprender Node.js',
        category: 'JavaScript',
        body: 'Este artigo vai te ajudar a aprender Node.js',
        coments: 4,
    }

    res.render('blogpost', {
        post
    })
})

app.get('/blog', (req, res) => {
    const posts = [{
            title: 'Aprender Node.js',
            category: 'JavaScript',
            body: 'Este artigo vai te ajudar a aprender Node.js',
            coments: 4,
        },
        {
            title: 'Aprender PHP',
            category: 'PHP',
            body: 'Este artigo vai te ajudar a aprender PHP',
            coments: 3,
        },
        {
            title: 'Aprender Python',
            category: 'Python',
            body: 'Este artigo vai te ajudar a aprender Python',
            coments: 10,
        }
    ]

    res.render('blog', {posts})
})

app.get('/', (req, res) => {

    const user = {
        name: "Anderson",
        surname: "Mendes",
        age: 28
    }

    const auth = false
    const approved = false

    res.render('home', {
        user: user,
        auth,
        approved
    })
})

app.listen(3000, () => {
    console.log('App funcionando!')
})