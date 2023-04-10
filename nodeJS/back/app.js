const express = require("express");
const app = express();
const mysql = require("mysql");
const myConnection = require("express-myconnection");
const port = 6969;
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

app.get("/", (req,res)=>{
    req.getConnection((error, connection)=>{
        if (error) {
            console.error(error);
        } else {
            connection.query("select * from liste", [], (error, data)=>{
                if (error) {
                    console.error(error);
                } else {
                    res.status(200).render("index", {data})    
                }
            })
        }
    })

});
app.get("/a_propos", (req,res)=>{
    res.status(200).render("a_propos")
});

app.use((req,res)=>{
    res.status(404).render("404")
});

app.listen(port, ()=>{
    console.log("Server listening on port" + port);
});