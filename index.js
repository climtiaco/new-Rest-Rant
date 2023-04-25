require('dotenv').config();
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Homepage')
}) 

app.listen(process.env.PORT, () => {
    console.log(`I'M ALIVE ON ${process.env.PORT}`)
})
