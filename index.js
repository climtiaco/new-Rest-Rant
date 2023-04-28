require('dotenv').config();
const express = require('express')
const app = express()


//Router
app.use('/places', require('./controllers/places'))


//Routes
app.get('/', (req, res) => {
    // Res.render ALWAYS looks for the file name of jsx file in your views folder.
    res.render('home')
}) 

//Middleware
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
//Added this line below when we created the mkdir 'public'
app.use(express.static('public'))

app.get('*', (req, res) => {
    res.render('error404')
})

//Listen
app.listen(process.env.PORT, () => {
    console.log(`I'M ALIVE ON ${process.env.PORT}`)
})
