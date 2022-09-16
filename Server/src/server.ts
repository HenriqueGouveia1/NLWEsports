import express from 'express'

const app = express()

app.get('/ads', (req, res) => {

    return res.json([
        {id: 1, nome: 'lol'},
        {id: 1, nome: 'lol'},
        {id: 1, nome: 'lol'}
    ])

})

app.listen(3333)