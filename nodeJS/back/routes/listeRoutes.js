const express = require('express');
const router = express.Router();



router.get("/", (req,res)=>{
    req.getConnection((error, connection)=>{
        if (error) {
            console.error(error);
            res.status(500).render('erreur', {error});
        } else {
            connection.query("select * from todolist", [], (error, data)=>{
                if (error) {
                    console.error(error);
                    res.status(500).render('erreur', {error});
                } else {
                    res.status(200).render("index", {data})    
                }
            })
        }
    })
    
});
///////////////////modifie///////////////////////////////////////////////////////////////
router.post("/liste", (req,res)=>{
    let id = req.body.id === ""? null: req.body.id;
    let title = req.body.title;
    let description = req.body.description;
    let requeteSQL = id === null ? "insert into todolist(titre, description) values(?, ?)" : "update todolist set titre = ?, description = ? where id = ?";
    let data  = id === null ? [title, description] : [title, description, id]
    req.getConnection((error, connection)=>{
        if (error) {
            console.error(error);
            res.status(500).render('erreur', {error});
        } else {
            connection.query(
                requeteSQL,
                data,
                (error, data)=>{
                    if (error) {
                        console.error(error);
                        res.status(500).render('erreur', {error});
                    } else {
                        res.status(200).redirect("/");    
                    }
                })
            }
        })
    });
    ///////////////////////////////supprime//////////////////////////////////////////////
    router.delete("/liste/:id", (req,res)=>{
        let id = req.params.id;
        req.getConnection((error, connection)=>{
            if (error) {
                console.error(error);
                res.status(500).render('erreur', {error});
            } else {
                connection.query("delete from todolist where id = ?", [id], (error, data)=>{
                    if (error) {
                        console.error(error);
                        res.status(500).render('erreur', {error});
                } else {
                    res.status(200).json({routeRacine : '/'})
                    //res renvoi tjr un json    
                }
            })
        }
    })
});

module.exports = router;