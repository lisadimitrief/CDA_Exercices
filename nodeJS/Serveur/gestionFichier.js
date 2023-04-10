const fs = require("fs");

///////////Créer un dossier/////////////////
// if (fs.existsSync("./monDossier")){
//     fs.rmdir("./monDossier", (Error)=>{
//         if (Error){
//             console.error(Error);
//         }else{
//             console.log("dossier supprimer");
//         }
//     })
// } else {
//     fs.mkdir("./monDossier", (Error)=>{
//         if(Error){
//             console.error(Error);
//         }else{
//             console.log("dossier créer");
//         }
//     })
// }

/////////////Créer un fichier txt/////////////////////////
// if (fs.existsSync("monDossier/nouveauFichier.txt", "lorem")){
//     fs.unlink("monDossier/nouveauFichier.txt", (Error)=>{
//         if (Error){
//             console.error(Error);
//         }else{
//             console.log("fichier supprimer");
//         }
//     })
// } else {
    // fs.writeFile("monDossier/nouveauFichier.txt", "lorem", (Error)=>{
    //     if(Error){
    //         console.error(Error);
    //     }else{
    //         console.log("fichier créer");
    //     }
    // })
// }

//////////////////////////Lis un fichier txt//////////////////////////////////
 
// fs.readFile("./monDossier/fichier.txt", (Error, Data)=>{
//     if (Error){
//         console.error(Error);
//     } else {
//         console.log(Data.toString());
//     }
// })

/////////////////////////////////Exercice/////////////////////////

if (fs.existsSync("./monDossier")){
    if (fs.existsSync("monDossier/fichier.txt", "Premier fichier node crée, je suis super contente !")){
        fs.unlink("monDossier/fichier.txt", (Error)=>{
            if (Error){
                console.error(Error);
            }else{
                console.log("fichier supprimer");
            }
        })
    }
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
    fs.writeFile("monDossier/fichier.txt", "Premier fichier node crée, je suis super contente !", (Error)=>{
            if(Error){
                console.error(Error);
            }else{
                console.log("fichier créer");
            }
        }
    )
}