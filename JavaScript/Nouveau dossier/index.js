// const prenom = "Lisa"
// const nom = "Dimitrief-Dontcheff"
// var age = 23
// const phrase = "Bonjour je m'appel "+prenom+" "+nom+" et j'ai "+age+" ans."
// // window.alert(phrase);
// // const pseudo = "Lyrael "
// // const race = "dragon "
// // const niveau = 1
// // const role = " brute"
// // const pagePerso = pseudo+race+niveau+role
// // window.alert(pagePerso);

// //...
// // window.alert(new Date().toLocaleDateString("fr"));
// //...

// console.log(nom.length); //donne le nombre de caractère
// const monTableau = [];
// monTableau ["jaune avec des taches"] = "bibi";
// monTableau ["jaune"] = "bibu";
// monTableau ["noir"] = "bobo";
// console.table(monTableau);

// var maChaine = new String("exemple");
// var a = 42;
// var b = 4.2;
// var c = -42;
// var d = "42";
//alert("ma variable a est de type: "+typeof a+"\nma variable b est de type: "+typeof b+"\nma variable c est de type: "+typeof c+"\nma variable d est de type: "+typeof d);

// var machaine = "exemple";
// var maChaine = new String("exemple");

//alert("ma variable machaine est de type : "+typeof(machaine)+ "\nma variable maChaine est de type : "+typeof(maChaine));

// var n = null;
// var u = undefined;
// var nn = NaN;

//alert("ma variable n est de type : "+typeof(n)+ "\nma variable u est de type : "+typeof(u)+"\nma variable nn est de type : "+typeof(nn));

//...

// var heure_ouverture = 09.00;
// var heure_fermeture = 17.00;
// var actu = 09.00;
// var matin = 12.00;

// if (actu<heure_ouverture)
// {
//     alert("c'est trop tôt, revenez plus tard");
// }
// else if (actu>=heure_ouverture && actu<heure_fermeture)
// {
//     if(actu>=heure_ouverture && actu<matin)
//     {
//         alert("Bienvenu ! C'est le matin !");
//     }
//     else
//     {
//     alert("Bienvenu ! C'est l'après-midi !");
//     }
// }
// else{
//     alert("Revenez demain");
// }

//...
// var note = 14;
// var noteAmericaine ="";

// if (note > 19) {
//     noteAmericaine = "A+";
// } else if (note >= 18 && note <=19) {
//     noteAmericaine = "A";
// }
// } else if (note >= 15 && note <18) {
//     noteAmericaine = "B";
// }
// } else if (note >= 12 && note <15) {
//     noteAmericaine = "C";
// }
// } else if (note >= 9 && note <12) {
//     noteAmericaine = "D";
// }
// } else if (note >= 6 && note <9) {
//     noteAmericaine = "E";
// }
// } else if(note <6) {
//     noteAmericaine = "F";
// }
// else{
//     noteAmericaine = "il sèche purée !";
// }
// alert(noteAmericaine);

// switch (noteAmericaine) {
//     case "A+":
//         alert("Magnifique")
//         break;
//     case "A":
//         alert("Excellent Travail")
//         break;
//     case "B":
//         alert("Très bon Travail")
//         break;
//     case "C":
//         alert("En bonne voie")
//         break;
//     case "D":
//         alert("Beaucoup de difficultés")
//         break;
//     case "E":
//         alert("N'a pas compris le cours")
//         break;
//     case "F":
//         alert("As tu lu les énoncés ?")
//         break;
        
//     default:
//         alert("aucune idée")
//         break;
//     }
//...


// var facture = 500;
// var réduction = 0;

// if (facture<1000)
// {
//     alert("Vous devez payer"+facture+"€");
// }
// else if(facture>=1000 && facture<=2500)
// {
//     facture = facture*0.95;
//     rédiction = 5;
//     alert("Vous devez payer"+facture+"€");
// }
// else(facture>2500)
// {
//     facture = facture*0.9;
//     réduction = 10;
//     alert("Vous devez payer"+facture+"€");
// }
// switch (réduction)
// {
//     case 0:
//         alert("pas de réduction")
//         break;
//     case 5:
//         alert("5% de réduction sur votre achat !")
//         break;
//     case 10:
//         alert("10% de réduction sur votre achat !")
//         break;    
// }

//vertion prof

// if (facture < 1000){
//     réduction = 0;
// }
// else if (facture <=2500 && facture >=1000){
//     réduction = 5;
// }
// else {
//     réduction = 10;
// }

// var total = facture-((réduction/100)*facture);

// switch (réduction){
//     case 0:
//         console.log("autres", facture);
//         break;
//     default:
//         console.log("total : ", total);
//         break;
// }

//...

// var arrayNbr = [1, 2, 3];
// var arrayStr = ["a", "b", "c"];


// arrayNbr.push(4); //[1, 2, 3, 4] ajoute
// arrayNbr.pop(); //[1, 2] retire le dernier
// arrayNbr.shift(); //[2, 3] retire le premier
// arrayNbr.unshift(0); //[0, 1, 2, 3] ajoute la valeur indiqué au début
// console.table(arrayNbr); //affiche le tableau dans la console
//...
//boucle for
// for(il y a ça; tant que; fais){action}
// for(il y a i=0; tant que i<tableau.length; alors fais i++){action}
// for(i=0; i<tableau.length; i++){action}
//...
// arrayStr.concat("d"); //fusionne des tableaux sans changer les valeurs du tableau initial
// arrayStr.joint("-"); // a-b-c joindre les valeurs du tableau sans changer les valeurs du tableau initial
// arrayStr.slice(2); // ["b", "c"] retire le nombre d'elements indiqué du tableau en partant du début sans changer les valeurs du tableau initial
// arrayStr.slice(-1); // ["b", "c"] retire le nombre d'elements indiqué du tableau en partant du début et en comptant depuis la fin sans changer les valeurs du tableau initial
// arrayStr.includes("c"); //regarde si "c" est inclu dans le tableau et envoi un boolean
// arrayStr.indexOf("c"); // donne l'index de la valeur du tableau
// arrayNbr.reduce((acc, cou)=> acc + cou) // 6 additions  
// arrayNbr.find(el => el > 2) //3 renvoie la valeur du premier élément trouvé dans le tableau qui respecte la condition
// arrayNbr.findIndex(el => el > 2) //2 renvoie l'index du premier élément trouvé dans le tableau qui respecte la condition
// arrayNbr.map(el => el * 2); //[2, 4, 6] crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.
// arrayNbr.some(el => el > 2); //true passe le test implémenté par la fonction fournie. Elle renvoie un booléen indiquant le résultat du test.
// arrayNbr.filter(el => el > 1) // [2,3] renvoi tous les éléments qui respectent la condition
// arrayNbr.every(el => el > 1);
// arrayNbr.reverse();
//console.log(arrayCopy);

//const div = document.getElementsByClassName("carre")
//console.log(div);

// var i=0
// while(i<div.length) //by matthias
// {
//     if ((i%2)==1)
//     {
//         div[i].style.background= 'rgb(0, 255, 0)';        
//     }
//     else
//     {
//         div[i].style.background= 'rgb(255,0,0)';
//     }
//     i++;
// }
//div[1].style.backgroundColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`


// for (let index=0; index<div.length; index++) //by prof
// {
    //     if (index % 2 != 0)
    //     {
        //         div[index].style.backgroundColor= 'rgb(255, 0, 0)'
        //     }
        //     else
        //     {
            //         div[index].style.backgroundColor= 'rgb(0, 255, 0)'
            //     }
            // }
// const bodi = document.getElementsByTagName('body');
// var bouton = document.getElementById('bouton');
// console.log(bouton)
// console.log(bodi)
// console.table(bodi)
            
// function nbr_rgb_aleatoire(){
//     return Math.floor(Math.random()*256);
// }
// function couleur()
// {
//     return bodi[0].style.backgroundColor = `rgb(${nbr_rgb_aleatoire()}, ${nbr_rgb_aleatoire()}, ${nbr_rgb_aleatoire()})`
// }
// bouton.addEventListener('click', couleur); //donne l'évent click !!


// const image = document.getElementById('img');
// image.src="../img/js.png";
// console.log(bodi)

// const test = document.getElementsByClassName('test');
//  for (let index = 0; index < test.length; index++) {
//     console.log(test[index].getAttribute('id'));    
//  }

// Array.from(test).forEach(element => {
//     element.addEventListener('click', function(e){
//         console.log(e.currentTarget.id)
//     })
// });

// function getsurface(larg, long)
// {
//     console.log(larg*long);
// }
// getsurface(7, 13)
// getsurface(7, 14)

// let apprenant = {
//     prenom : "Anne-Sophie",
//     nom : "Van",
//     age : "pas tes oignons",
//     clog : function(){
//         console.log(this.nom)
//     }
// };
// apprenant.clog();

// function Personnage(pseudo, race, age, mode) {
//     this.pseudo = pseudo;
//     this.race = race;
//     this.age = age;
//     this.mode = mode;
// }
// let monPerso = new Personnage("lyrael", "kitsune", 23, "epeiste");
// console.log(monPerso);


// jeux (mariobros)
// année de sortie sur chaque console
// pour chaque console faire une instance de l'objet (le jeu est sorti sur /// en ///)