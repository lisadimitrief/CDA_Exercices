let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

context.beginPath(); //début du tracé
context.rect(20, 40, 50, 50); //tracé d'un rectangle
context.lineWidth = 5; // épaisseur du trai
context.strokeStyle = "red"; // couleur du trai
context.stroke();// imposition du style stroke
context.closePath();//fin du tracé

context.beginPath();
context.rect(200, 400, 50, 50);
context.fillStyle = "magenta";
context.fill();
context.closePath();

https://developer.mozilla.org/fr/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it