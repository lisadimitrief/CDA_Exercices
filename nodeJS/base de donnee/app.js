const {app, port} = require('./server');
const path = require('./route'); //met rien car il prends automatiquement l'index
const cors = require('cors');

app.use(cors());
path.abonnementsPath(app);
path.membrePath(app);
path.clubPath(app);

app.listen(port, ()=>{
    console.log('🐉 Server is running on port '+port+' 🔥');
})