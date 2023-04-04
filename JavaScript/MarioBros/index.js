const container = document.querySelector('#container');

function Jeu(titre, console, annee, description) {
    this.titre = titre;
    this.console = console;
    this.annee = annee;
    this.description = description;
};
let marioBros1 = new Jeu("Superjeu Mario 3D World + Bowsers Fury", "Nintendo Switch", 2021, "ozidfn qb hfpaq fpah uefdo qih");
let marioBros2 = new Jeu("Super Mario Bros. 35", "Nintendo Switch", 2020, "ozidfn qb hfpaq fpah uefdo qih");
let marioBros3 = new Jeu("Super Mario Maker 2", "Nintendo Switch", 2019, "ozidfn qb hfpaq fpah uefdo qih");
let marioBros4 = new Jeu("Super Mario Odyssey", "Nintendo Switch", 2017, "ozidfn qb hfpaq fpah uefdo qih");
let marioBros5 = new Jeu("Super Mario Maker", "Wii U", 2015, "ozidfn qb hfpaq fpah uefdo qih");
let marioBros6 = new Jeu("Super Mario 3D World", "Wii U", 2013, "ozidfn qb hfpaq fpah uefdo qih");
let marioBros7 = new Jeu("New Super Mario Bros. U", "Wii U", 2012, "ozidfn qb hfpaq fpah uefdo qih");
let marioBros8 = new Jeu("Super Mario Galaxy 2", "Wii", 2010, "ozidfn qb hfpaq fpah uefdo qih");
let marioBros9 = new Jeu("New Super Mario Bros. Wii", "Wii", 2009, "ozidfn qb hfpaq fpah uefdo qih");
let marioBros10 = new Jeu("Super Mario Galaxy", "Wii", 2007, "ozidfn qb hfpaq fpah uefdo qih");

let maCollection = {...{marioBros1},...{marioBros2},  ...{marioBros3}, ...{marioBros4},  ...{marioBros5},  ...{marioBros6},  ...{marioBros7},  ...{marioBros8},  ...{marioBros9},  ...{marioBros10}};


// grace a la methode Map, pour chaque objet a l'interieur de l'objet ma collection on va créerun div qui auras come h2 le nom console, h3 nom Jeu, h4 année
//avec (arrayNbr.map(el => el * 2); //[2, 4, 6] crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.)?

// console.log("longueur : ",Object.keys(maCollection).length)
// Object.values(maCollection).map((marioBros) => {
//                                                 console.log(marioBros.console)
//                                                 console.log(marioBros.titre)
//                                                 console.log(marioBros.annee)
//                                             })
                                            
let result = document.getElementById("result");
result.innerHTML= Object.values(maCollection).map((marioBros)=>
    `<div class="card">
    <h2>Titre : ${marioBros.titre}</h2>
    <h3>Console : ${marioBros.console}</h3>
    <h4>Année :${marioBros.annee}</h4>
    <input type="button" id="btn" value="Description">
    </div>`);








// possibilité pop'up :
// <input type="button" onclick="alert('${marioBros.description}')" value="Description">


    // nbr=Object.keys(maCollection).length;
    // p=0;
    // let container=document.getElementById("container");
    // let g=document.getElementById("g");
    // let d=document.getElementById("d");
    // container.style.width=(800*nbr)+"px";
    // for(i=1;i<nbr;i++)
    // {
    //     container.innerHTML= Object.values(maCollection).map((marioBros)=>
    //     `<div class="card">
    //     <h2>Titre : ${marioBros.titre}</h2>
    //     <h3>Console : ${marioBros.console}</h3>
    //     <h4>Année :${marioBros.année}</h4>
    //     <input type="button" value="Description">
    //     </div>`);
    // }
