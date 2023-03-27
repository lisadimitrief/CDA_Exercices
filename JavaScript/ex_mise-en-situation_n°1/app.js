function couleurFond() {
    document.body.style.background = `rgb(${couleurAleatoire()},${couleurAleatoire()},${couleurAleatoire()})`;
}
function couleurAleatoire() {
    return Math.floor(Math.random()*256);
}
couleurFond()

//****//
document.getElementById("btn").style.display= "flex";
//****//

let div = document.getElementById("divId");
let liste = document.getElementById("listeId")
let lipush = document.createElement("li");
lipush.innerHTML="lorem";
liste.appendChild(lipush);

//****//

let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", supprime);
function supprime() {
        liste.removeChild(liste.lastChild)
}

//****//

let liste2 = document.getElementById("listeId2");
let btn2 = document.getElementById("btn2");

btn2.addEventListener("click", noon);
function noon() {
    document.getElementById("listeId2").style.display = "none";
}

btn2.addEventListener("dblclick", blook);
function blook() {
    document.getElementById("listeId2").style.display = "block";
}

//****//

let btn3 = document.getElementById("btn3");
btn3.addEventListener("click", pousse);
i=0;

function pousse() {
        document.getElementById("btn1").style.marginTop = 1*i+"em";
        document.getElementById("btn2").style.marginBottom = 1*i+"em";
        document.getElementById("btn3").style.marginBottom = 1*i+"em";
        document.getElementById("btn4").style.marginBottom = 1*i+"em";
        i ++;
}

//****//

let btn4 = document.getElementById("btn4");
btn4.addEventListener("click", couleur)

function couleur() {
    document.getElementById("btn4").style.backgroundColor= `rgb(${couleurAleatoire()},${couleurAleatoire()},${couleurAleatoire()})`;
}

//****//

let btn5 = document.getElementById("btn5");
btn5.addEventListener("click", fond);
btn5.addEventListener("dblclick", couleurFond);

function fond() {
    document.body.style.background= "url(background.jpg)";
}