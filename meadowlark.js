// const express = require('express')
import express from 'express'
// const expressHandlebars = require('express-handlebars')
// const ExpressHandlebars = require('express-handlebars');
import { engine } from 'express-handlebars';

const app = express()

app.engine('handlebars', engine());
// app.engine('handlebars', ExpressHandlebars());
// app.engine('handlebars', expressHandlebars({
//     defaultLayout: 'main',
//   }))
app.set('view engine', 'handlebars')
app.set('views', './views')

// app.get('/', (req, res) => {
//     res.render('home');
// });

// app.use(express.static(__dirname))

const port = process.env.PORT || 3000
app.get('/', (req, res) => { 
    res.render('home')     
})
app.get('/about', (req, res) => { 
    res.render('about')     
})
// Пользовательская страница 404 
app.use((req, res) => {  
    res.status(404) 
    res.render('404')
})
// Пользовательская страница 500 
app.use((err, req, res, next) => { 
    console.error(err.message) 
    res.type('text/plain') 
    res.status(500)
    res.render('500')
})
app.listen(port, () => console.log(
` Express запущен на http://localhost:${port}; ` +
` нажмите Ctrl+C для завершения.` ))