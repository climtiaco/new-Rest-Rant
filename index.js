require('dotenv').config();
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Homepage')
}) 

app.get('*', (req, res) => {
    res.status(404).send('404')
})

app.listen(process.env.PORT, () => {
    console.log(`I'M ALIVE ON ${process.env.PORT}`)
})
