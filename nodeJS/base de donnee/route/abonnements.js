const {connection} = require('../server');

const path = (app)=>{
    app.get('/abonnements', (req,res)=>{
    connection.query('select * from abonnements;',[], (error,results)=>{
        if (error) throw error;
            res.json(results)
        })
    });
    
    app.get('/abonnements/:id', (req,res)=>{
        const abonnements_id = req.params.id;
    connection.query('select * from abonnements where abonnements_id=?;',[abonnements_id], (error,results)=>{
        if (error) throw error;
            res.json(results)
        })
    });
    app.post('/abonnements', (req,res)=>{
        const nom = req.body.nom;
        const tarif = req.body.tarif;
        const hygiene = req.body.hygiene;
        const coach = req.body.coach;
        console.log(req.body);
        let requeteSQL ='insert into abonnements (nom, tarif, hygiene, coach) values (?, ?, ?, ?);';
        connection.query(
            requeteSQL,
            [nom,tarif,hygiene,coach],
            (error, data)=>{
                if (error) {
                    console.error(error);
                    res.status(500).send('erreur', {error});
                } else {
                    res.status(201).send('ok');    
                }
            })
    });
    
    app.delete('/abonnements/:id', (req,res)=>{
        const abonnements_id = req.params.id;
        connection.query('delete from abonnements where abonnements_id=?;',[abonnements_id], (error,results)=>{
            if (error) throw error;
            if (results.affectedRows === 0) {
                res.status(404).send('Pas trouvé ton abonnement chelou');
            }else{
                res.status(200).send({message : 'Abonnement supprimé'});
            }
        });
    });

    app.patch('/abonnements/:id', (req,res)=>{
        const nom = req.body.nom;
        const tarif = req.body.tarif;
        const hygiene = req.body.hygiene;
        const coach = req.body.coach;
        let requeteSQL ='update abonnements set nom="?", tarif=?, hygiene=?, coach=?  where abonnements_id = ?';
        req.getConnection((error, connection)=>{
                if (error) {
                    console.error(error);
                    res.status(500).render('erreur', {error});
                } else {
                    connection.query(
                        requeteSQL,[nom, tarif, hygiene, coach],
                        (error, data)=>{
                            if (error) {
                                console.error(error);
                                res.status(500).send('erreur', {error});
                            } else {
                                res.status(201).send('ok');
                            }
                        })
                }
        })
    });
};



module.exports = path;
