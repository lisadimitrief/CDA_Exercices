const {connection} = require('../server');

const path = (app)=>{
    app.get('/club', (req,res)=>{
    connection.query('select * from club;',[], (error,results)=>{
        if (error) throw error;
            res.json(results)
        })
    });
    app.get('/clubjoinclub', (req,res)=>{
    connection.query('select club.nom as nom, club.nom as club from club join club using(club_id);',[], (error,results)=>{
        if (error) throw error;
            res.json(results)
        })
    });
    
    app.get('/club/:id', (req,res)=>{
        const club_id = req.params.id;
    connection.query('select * from club where club_id=?;',[club_id], (error,results)=>{
        if (error) throw error;
            res.json(results)
        })
    });

    app.post('/club', (req,res)=>{
        const nom = req.body.nom;
        const date_naissance = req.body.date_naissance;
        const tel = req.body.tel;
        const mail = req.body.mail;
        const carte_identite = req.body.carte_identi;
        const cartif_medical = req.body.cartif_medical;
        const licence = req.body.licence;
        const login = req.body.login;
        const mot_de_passe = req.body.mot_de_passe;
        const club_id = req.body.club_id;
        const statu_id = req.body.statu_id;
        const abonnements_id = req.body.abonnements_id;
        const carte_bleu = req.body.carte_bleu;
        const medecin_id = req.body.medecin_id;
        const assurance_id = req.body.assurance_id;
        const adresse_id = req.body.adresse_id;
        console.log(req.body);
        let requeteSQL ='insert into club (nom, date_naissance, tel, mail, carte_identite, cartif_medical, licence , login, mot_de_passe, club_id, statu_id, abonnements_id, carte_bleu, medecin_id, assurance_id, adresse_id) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);';
        connection.query(
            requeteSQL,
            [nom, date_naissance, tel, mail, carte_identite, cartif_medical, licence , login, mot_de_passe, club_id, statu_id, abonnements_id, carte_bleu, medecin_id, assurance_id, adresse_id],
            (error, data)=>{
                if (error) {
                    console.error(error);
                    res.status(500).send('erreur', {error});
                } else {
                    res.status(201).send('ok');    
                }
            })
    });
    
    app.delete('/club/:id', (req,res)=>{
        const club_id = req.params.id;
        connection.query('delete from club where club_id=?;',[club_id], (error,results)=>{
            if (error) throw error;
            if (results.affectedRows === 0) {
                res.status(404).send('Pas trouvé ton club');
            }else{
                res.status(200).send({message : 'club supprimé'});
            }
        });
    });

    app.patch('/club/:id', (req,res)=>{
        const nom = req.body.nom;
        const date_naissance = req.body.date_naissance;
        const tel = req.body.tel;
        const mail = req.body.mail;
        const carte_identite = req.body.carte_identi;
        const cartif_medical = req.body.cartif_medical;
        const licence = req.body.licence;
        const login = req.body.login;
        const mot_de_passe = req.body.mot_de_passe;
        const club_id = req.body.club_id;
        const statu_id = req.body.statu_id;
        const abonnements_id = req.body.abonnements_id;
        const carte_bleu = req.body.carte_bleu;
        const medecin_id = req.body.medecin_id;
        const assurance_id = req.body.assurance_id;
        const adresse_id = req.body.adresse_id;
        let requeteSQL ='update club set nom=?, date_naissance=?, tel=?, mail=?, carte_identite=?, cartif_medical=?, licence =?, login=?, mot_de_passe=?, club_id=?, statu_id=?, abonnements_id=?, carte_bleu=?, medecin_id=?, assurance_id=?, adresse_id  where club_id = ?';
        req.getConnection((error, connection)=>{
                if (error) {
                    console.error(error);
                    res.status(500).render('erreur', {error});
                } else {
                    connection.query(
                        requeteSQL,[nom, date_naissance, tel, mail, carte_identite, cartif_medical, licence , login, mot_de_passe, club_id, statu_id, abonnements_id, carte_bleu, medecin_id, assurance_id, adresse_id],
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