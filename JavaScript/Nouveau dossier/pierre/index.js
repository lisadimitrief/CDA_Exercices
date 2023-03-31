const pierre = "pierre";
const feuille = "feuille";
const ciseaux = "ciseaux";
var ordin = "";
var joueur = "";
var bouton = document.getElementsByTagName('button')

function numberRandom()
{
    return Math.floor(Math.random()*3);
}
function bruh() {
    switch (numberRandom()) {
        case 0:
            ordin=pierre
            break;
        case 1:
            ordin=feuille
            break;
        default:
            ordin=ciseaux
            break;
    }
}


Array.from(bouton).forEach
(element =>
    {
        element.addEventListener
        ('click', function(e)
            {
                joueur=e.currentTarget.getAttribute('class');
                bruh()
                play()
            }
        )
    }
);

function play() 
{   
    
    if(joueur == ordin)
    {
        alert("bon bah recommence, egalité")
    }
    else if
    (
        joueur==pierre && ordin==ciseaux || joueur==feuille && ordin==pierre || joueur==ciseaux && ordin==feuille 
    )
    {
        alert("Tu as gagné chançeux(euse) !!")
    }
    else
    {
        alert("Loser !!")
    }
}
