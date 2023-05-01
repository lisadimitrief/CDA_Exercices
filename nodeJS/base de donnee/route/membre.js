const {connection} = require('../server');

const path = (app)=>{
    app.get('/membre', (req,res)=>{
    connection.query('select membre.nom as nom, club.nom as club, date_naissance as "Date de Naissance", membre.mail, abonnements.nom as "Abonnement", statu.statu as "Status", medecin.nom as "Medecin"  from membre inner join club using(club_id) inner join abonnements using(abonnements_id) inner join statu using(statu_id) inner join medecin using(medecin_id);',[], (error,results)=>{
        if (error) throw error;
            res.json(results)
        })
    });
    
    app.get('/membre/:id', (req,res)=>{
        const membre_id = req.params.id;
    connection.query('select membre.nom as nom, club.nom as club, date_naissance as "Date de Naissance", membre.mail, abonnements.nom as "Abonnement", statu.statu as "Status", medecin.nom as "Medecin"  from membre inner join club using(club_id) inner join abonnements using(abonnements_id) inner join statu using(statu_id) inner join medecin using(medecin_id) where membre_id=?;',[membre_id], (error,results)=>{
        if (error) throw error;
            res.json(results)
        })
    });
    app.get('/membre/:column/:value', (req,res)=>{
        const column = req.params.column;
        let value = req.params.value;
        reqSQL = `select membre.nom as nom, club.nom as club, date_naissance as "Date de Naissance", membre.mail, abonnements.nom as "Abonnement", statu.statu as "Status", medecin.nom as "Medecin"  from membre inner join club using(club_id) inner join abonnements using(abonnements_id) inner join statu using(statu_id) inner join medecin using(medecin_id) where membre.${column} like '%${value}%'`;
    connection.query(reqSQL,[], (error,results)=>{
        if (error) throw error;
            res.json(results)
        })
    });

    app.post('/membre', (req,res)=>{
        const nom = req.body.nom;
        const date_naissance = req.body.date_naissance;
        const tel = req.body.tel;
        const mail = req.body.mail;
        const carte_identite = req.body.carte_identite;
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
        let requeteSQL ='insert into membre (nom, date_naissance, tel, mail, carte_identite, cartif_medical, licence , login, mot_de_passe, club_id, statu_id, abonnements_id, carte_bleu, medecin_id, assurance_id, adresse_id) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);';
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
    
    app.delete('/membre/:id', (req,res)=>{
        const membre_id = req.params.id;
        connection.query('delete from membre where membre_id=?;',[membre_id], (error,results)=>{
            if (error) throw error;
            if (results.affectedRows === 0) {
                res.status(404).send('Pas trouvé ton membre');
            }else{
                res.status(200).send({message : 'Membre éliminé'});
            }
        });
    });

    app.patch('/membre/:id/:value', (req,res)=>{
        const membre_id = req.params.id;
        let value = {};

        if (req.params.value === 'nom') {
            reqSQL = 'update membre set nom="?" where membre_id=?';
            value = nom
        } else if (req.params.value === 'date_naissance'){
            reqSQL = 'update membre set date_naissance=? where membre_id=?';
            value = date_naissance
        } else if (req.params.value === 'tel'){
            reqSQL = 'update membre set tel="?" where membre_id=?';
            value = tel
        } else if (req.params.value === 'mail'){
            reqSQL = 'update membre set mail="?" where membre_id=?';
            value = mail
        } else if (req.params.value === 'club_id'){
            reqSQL = 'update membre set club_id=? where membre_id=?';
            value = club_id
        } else if (req.params.value === 'statu_id'){
            reqSQL = 'update membre set statu_id=? where membre_id=?';
            value = statu_id
        }else if (req.params.value === 'abonnements_id'){
            reqSQL = 'update membre se abonnements_id=? where membre_id=?';
            value = abonnements_id
        }
        else {
            reqSQL ='update membre set medecin_id=? where membre_id=?';
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

    app.put('/membre/:id', (req,res)=>{
        const nom = req.body.nom;
        const tarif = req.body.tarif;
        const hygiene = req.body.hygiene;
        const coach = req.body.coach;
        let requeteSQL ='update membre set nom="?", date_naissance=?, tel="?", mail="?", club_id=?, statu_id=?, abonnements_id=?, medecin_id=? where membre_id=?';
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
                            res.status(201).send("C'est fait !");
                        }
                    })
            }
        });
    });
};



module.exports = path;
