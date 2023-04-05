const fs = require("fs");
if (fs.existsSync("./monDossier")){
    fs.rmdir("./monDossier", (Error)=>{
        if (Error){
            console.error(Error);
        }else{
            console.log("dossier supprimer");
        }
    })
} else {
    fs.mkdir("./monDossier", (Error)=>{
        if(Error){
            console.error(Error);
        }else{
            console.log("dossier créer");
        }
    })
}