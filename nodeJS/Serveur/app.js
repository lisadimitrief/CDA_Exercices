const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000;

app.use(express.static('public'));
// app.use(express.static('HTML'));
app.use(morgan("dev"));
// app.use((req,res, next)=>{
//     console.log("Requête effectuée : "+Date().toString());
//     next()
// })


app.get('/index', function (req, res) {
  res.status(200).sendFile('/HTML/index.html', {root:__dirname})
})
app.get('/profil', function (req, res) {
  res.status(200).sendFile('/HTML/profil.html', {root:__dirname})
})
app.get('/product', function (req, res) {
  res.status(200).sendFile('/HTML/product.html', {root:__dirname})
})
app.get('/contact', function (req, res) {
  res.status(200).sendFile('/HTML/contact.html', {root:__dirname})
})
app.get('/', function (req, res) {
    res.status(304).redirect('/index')
})


app.use((req, res)=>{
  res.status(404).sendFile('/HTML/404.html', {root:__dirname})
})

app.listen(port, ()=>{
    console.log("server listening on port" + port);
})