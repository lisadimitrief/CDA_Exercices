'use strict';

let objet={
    i: 10,
    b: () => console.log(this.i, this),
    c: function() {
        console.log(this.i, this);
    }
}

let voiture ={
    cheveaux: 200,
    annee: 2023,
    portes: 5,
    couleur: "rose",
    carburant: "banane"
}
console.log("carburant de la voiture : "+voiture.carburant);