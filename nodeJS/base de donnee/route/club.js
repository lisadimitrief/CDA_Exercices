const {connection} = require('../server');

const path = (app)=>{
    app.get('/club', (req,res)=>{
    connection.query('select nom, casiers as "Nombre de Casiers", surface, p_parking as "Nombre de Place de Parking", toilettes as "Nombre de Toilettes", douches as "Nombre de Douches", saunas as "Nombre de Saunas" from club;',[], (error,results)=>{
        if (error) throw error;
            res.json(results)
        })
    });
    
    app.get('/club/:id', (req,res)=>{
        const club_id = req.params.id;
    connection.query('select nom, casiers as "Nombre de Casiers", surface, p_parking as "Nombre de Place de Parking", toilettes as "Nombre de Toilettes", douches as "Nombre de Douches", saunas as "Nombre de Saunas" from club where club_id=?;',[club_id], (error,results)=>{
        if (error) throw error;
            res.json(results)
        })
    });

    app.get('/club/:id/membre', (req,res)=>{
        const club_id = req.params.id;
    connection.query('select club.nom as "Nom du Club", membre.nom as Membre, membre.mail, abonnements.nom as "Abonnement", statu.statu as "Status"  from membre inner join club using(club_id) inner join abonnements using(abonnements_id) inner join statu using(statu_id) where club_id=?',[club_id], (error,results)=>{
        if (error) throw error;
            res.json(results)
        })
    });

    app.post('/club', (req,res)=>{
        const nom = req.body.nom;
        const casiers = req.body.casiers;
        const surface = req.body.surface;
        const p_parking = req.body.p_parking;
        const toilettes = req.body.toilettes;
        const douches = req.body.douches;
        const saunas = req.body.saunas;
        const assurance_id = req.body.assurance_id;
        const adresse_id = req.body.adresse_id;
        const machines_id = req.body.machine_id;
        console.log(req.body);
        let requeteSQL ='insert into club (nom, casiers, surface, p_parking, toilettes, douches, saunas, assurance_id, adresse_id, machines_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);';
        connection.query(
            requeteSQL,
            [nom, casiers, surface, p_parking, toilettes, douches, saunas, assurance_id, adresse_id, machines_id],
            (error, data)=>{
                if (error) {
                    console.error(error);
                    res.status(500).send('erreur', {error});
                } else {
                    res.status(201).send("C'est fait !");    
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

    app.patch('/club/:id/:value', (req,res)=>{
        const abonnements_id = req.params.id;
        let value = {};

        if (req.params.value === 'nom') {
            reqSQL = 'update club set nom="?" where club_id=?';
            value = nom
        } else if (req.params.value === 'date_naissance'){
            reqSQL = 'update club set date_naissance=? where club_id=?';
            value = date_naissance
        } else if (req.params.value === 'tel'){
            reqSQL = 'update club set tel="?" where club_id=?';
            value = tel
        } else if (req.params.value === 'mail'){
            reqSQL = 'update club set mail="?" where club_id=?';
            value = mail
        } else if (req.params.value === 'club_id'){
            reqSQL = 'update club set club_id=? where club_id=?';
            value = club_id
        } else if (req.params.value === 'statu_id'){
            reqSQL = 'update club set statu_id=? where club_id=?';
            value = statu_id
        }else if (req.params.value === 'abonnements_id'){
            reqSQL = 'update club se abonnements_id=? where club_id=?';
            value = abonnements_id
        }
        else {
            reqSQL ='update club set medecin_id=? where club_id=?';
            value = medecin_id
        }
        connection.query(reqSQL, [value, abonnements_id],(error, data)=>{
            if (error) {
                console.error(error);
                res.status(500).send('erreur', {error});
            } else {
                res.status(201).send("C'est fait !");
            }
        });
    });

    app.put('/club/:id', (req,res)=>{
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