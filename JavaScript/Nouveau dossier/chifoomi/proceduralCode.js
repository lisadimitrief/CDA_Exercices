const img = document.querySelectorAll('.commandes img');
const tab = ['pierre', 'feuille', 'ciseaux'];
const resultat = document.getElementById('resultat');
const msgResult = document.getElementById('msgResult');
var msgScoreOrdi = document.getElementById('msgScoreOrdi');
var msgScoreJoueur = document.getElementById('msgScoreJoueur');


img.forEach(element => {
    element.addEventListener(
        'click',
        function (e) {
            var joueur = e.currentTarget.id;
            var ordinateur = tab[Math.floor(Math.random() * 3)];
            resultat.setAttribute('src', 'img/' + ordinateur + '.png');
            resultat.setAttribute('alt', ordinateur);
            msgScoreJoueur.innerHTML = "";
            msgScoreOrdinateur.innerHTML = "";

            if (joueur == ordinateur) {
                console.log('égalité');
                msgResult.innerHTML = 'égalité';
            } else if (
                joueur == 'pierre' && ordinateur == 'ciseaux' ||
                joueur == 'feuille' && ordinateur == 'pierre' ||
                joueur == 'ciseaux' && ordinateur == 'feuille'
                ) {
                msgResult.innerHTML = 'Win !!!';
                msgScoreJoueur++
                console.log('win');
            } else {
                msgResult.innerHTML = 'Perdu... !!!';
                msgScoreOrdinateur++
                console.log('loose');
            }

        }
    )
});