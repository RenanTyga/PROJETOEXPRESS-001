const express = require('express');

let app = express();

app.get("/", (req, res) =>{
    res.send("Olá Mundo !!!!!!!")
})

app.get("/contatos", (req, res) =>{
    res.send("Renan Rodrigues")
})


app.listen(3000, ()=> console.log("Servidor esta rodando"))