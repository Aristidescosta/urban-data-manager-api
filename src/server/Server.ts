import express from 'express'

const SERVER = express();

SERVER.get('/', (req, res) =>{
    return res.send('Olá dev')
})

export { SERVER }