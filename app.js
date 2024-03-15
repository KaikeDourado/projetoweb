const express = require ("express")
const app = express()
const handlebars = require("express-handlebars").engine

app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set('view engine', 'handlebars')

app.listen(8081, function(){
    console.log("Servidor ativo!")
})
app.get("/", function(req, res){
    res.render("index")
})

app.get("/consultar", function(req, res){
    res.render("consultar")
})

app.get("/atualizar", function(req, res){
    res.render("atualizar")
})