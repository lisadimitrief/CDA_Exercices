const express = require("express");
const app = express();
const mysql = require("mysql");
const myConnection = require("express-myconnection");
const port = 6969;
const listeRoutes = require('./routes/listeRoutes');
const optionBDD= {
    host: "localhost",
    user: "root",
    password: "root",
    port: 3306,
    database: "back"
}

app.use(myConnection(mysql, optionBDD, "pool"));
app.use(express.static("public"));
app.set("views", "./IHM"); // definition du chemin de mes views/le front/html
app.set("view engine", "ejs"); //definition du moteur de views/le front/html
app.use(express.urlencoded({extended : false}));
app.use(listeRoutes); // j'utilise le component d'acces aux données pour la liste


app.get("/a_propos", (req,res)=>{
    res.status(200).render("a_propos")
});

app.use((req,res)=>{
    res.status(404).render("404")
});

app.listen(port, ()=>{
    console.log("Server listening on port" + port);
});

// si probleme de connection entre js et sql executer ça sur un fichier sql : 
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
// flush privileges;