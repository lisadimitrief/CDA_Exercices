const result = document.querySelector('.result');

function Jeu(titre, console, année) {
    this.titre = titre;
    this.console = console;
    this.année = année;
};
let marioBros1 = new Jeu("Superjeu Mario 3D World + Bowsers Fury", "Nintendo Switch", 2021);
let marioBros2 = new Jeu("Super Mario Bros. 35", "Nintendo Switch", 2020);
let marioBros3 = new Jeu("Super Mario Maker 2", "Nintendo Switch", 2019);
let marioBros4 = new Jeu("Super Mario Odyssey", "Nintendo Switch", 2017);
let marioBros5 = new Jeu("Super Mario Maker", "Wii U", 2015);
let marioBros6 = new Jeu("Super Mario 3D World", "Wii U", 2013);
let marioBros7 = new Jeu("New Super Mario Bros. U", "Wii U", 2012);
let marioBros8 = new Jeu("Super Mario Galaxy 2", "Wii", 2010);
let marioBros9 = new Jeu("New Super Mario Bros. Wii", "Wii", 2009);
let marioBros10 = new Jeu("Super Mario Galaxy", "Wii", 2007);

// let maCollection ={
//     1 : marioBros1.titre,
//     2 : marioBros2.titre,
//     3 : marioBros3.titre,
//     4 : marioBros4.titre,
//     5 : marioBros5.titre,
//     6 : marioBros6.titre,
//     7 : marioBros7.titre,
//     8 : marioBros8.titre,
//     9 : marioBros9.titre,
//     10 : marioBros10.titre
// }
// console.log(maCollection);

let maCollection = {...{marioBros1},...{marioBros2},  ...{marioBros3}, ...{marioBros4},  ...{marioBros5},  ...{marioBros6},  ...{marioBros7},  ...{marioBros8},  ...{marioBros9},  ...{marioBros10}};

for (const key in maCollection)
{
    console.log(maCollection[key]);
};

// grace a la methode Map, pour chaque objet a l'interieur de l'objet ma collection on va créerun div qui auras come h2 le nom console, h3 nom Jeu, h4 année
//avec (arrayNbr.map(el => el * 2); //[2, 4, 6] crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.)?

Object.values(maCollection).map
        (
            (marioBros) => {
                            console.log(marioBros.console)
                            console.log(marioBros.titre)
                            console.log(marioBros.année)
                            }
        )
result.innerHTML= Object.values(maCollection).map((marioBros)=>`<div class="card">
<h2>Titre : ${marioBros.titre}</h2>
<h3>Console : ${marioBros.console}</h3>
<h4>Année :${marioBros.année}</h4>
</div>`);
result.
console.log(result);