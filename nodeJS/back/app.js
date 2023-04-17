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
app.use(express.urlencoded({extended : false}));

app.get("/", (req,res)=>{
    req.getConnection((error, connection)=>{
        if (error) {
            console.error(error);
        } else {
            connection.query("select * from todolist", [], (error, data)=>{
                if (error) {
                    console.error(error);
                } else {
                    res.status(200).render("index", {data})    
                }
            })
        }
    })

});
///////////////////modifie///////////////////////////////////////////////////////////////
app.post("/liste", (req,res)=>{
    let id = req.body.id === ""? null: req.body.id;
    let title = req.body.title;
    let description = req.body.description;
    let requeteSQL = id === null ? "insert into todolist(titre, description) values(?, ?)" : "update todolist set titre = ?, description = ? where id = ?";
    let data  = id === null ? [title, description] : [title, description, id]
    req.getConnection((error, connection)=>{
        if (error) {
            console.error(error);
        } else {
            connection.query(
            requeteSQL,
            data,
            (error, data)=>{
                if (error) {
                    console.error(error);
                } else {
                    res.status(200).redirect("/");    
                }
            })
        }
    })
});
///////////////////////////////supprime//////////////////////////////////////////////
app.delete("/liste/:id", (req,res)=>{
    let id = req.params.id;
    // let title = req.body.title;
    // let description = req.body.description;
    // let requeteSQL = id === null ? "delete from todolist where id = ?" : "delete from todolist where titre = ? ";
    // let data  = id === null ? [title, description] : [title, description, id];
    req.getConnection((error, connection)=>{
        if (error) {
            console.error(error);
        } else {
            connection.query("delete from todolist where id = ?", [id], (error, data)=>{
                if (error) {
                    console.error(error);
                } else {
                    res.status(200).json({routeRacine : '/'})
                
                    //res renvoi tjr un json    
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

// si probleme de connection entre js et sql executer ça sur un fichier sql : 
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
// flush privileges;