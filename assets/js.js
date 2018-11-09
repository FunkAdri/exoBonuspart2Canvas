var c = document.getElementById("canvas1");
var ctx = c.getContext("2d");

// E
ctx.beginPath();
ctx.fillRect(50, 100, 100, 3);
ctx.fill();

ctx.beginPath();
ctx.fillRect(50, 100, 3, 300);
ctx.fill();

ctx.beginPath();
ctx.fillRect(50, 250, 100, 3);
ctx.fill();

ctx.beginPath();
ctx.fillRect(50, 400, 100, 3);
ctx.fill();

// 2
ctx.beginPath();
ctx.moveTo(150,100)
ctx.quadraticCurveTo(600, -100, 110, 450);
ctx.strokeStyle="#ea4e1d";
ctx.lineWidth=10;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(110,450);
ctx.quadraticCurveTo(200, 400, 300, 400);
ctx.strokeStyle="#ea4e1d";
ctx.lineWidth=10;
ctx.stroke();

// N
ctx.beginPath();
ctx.fillRect(365, 100, 3, 300);
ctx.fill();

ctx.beginPath();
ctx.moveTo(366, 100);
ctx.lineTo(517, 400);
ctx.strokeStyle="#000000";
ctx.lineWidth=3;
ctx.stroke();

ctx.beginPath();
ctx.fillRect(516, 100, 3, 300);
ctx.fill();

// Losanges
// Première Ligne
ctx.beginPath();
ctx.moveTo(600, 100);
ctx.lineTo(600, 120);
ctx.lineTo(610, 130);
ctx.lineTo(620, 120);
ctx.lineTo(620, 100);
ctx.lineTo(610, 90);
ctx.fillStyle="#ebebeb";
ctx.fill();

// Deuxième Lignes
ctx.beginPath();
ctx.moveTo(585, 140);
ctx.lineTo(585, 160);
ctx.lineTo(595, 170);
ctx.lineTo(605, 160);
ctx.lineTo(605, 140);
ctx.lineTo(595, 130);
ctx.fillStyle="#dbdadb";
ctx.fill();

ctx.beginPath();
ctx.moveTo(615, 140);
ctx.lineTo(615, 160);
ctx.lineTo(625, 170);
ctx.lineTo(635, 160);
ctx.lineTo(635, 140);
ctx.lineTo(625, 130);
ctx.fillStyle="#595656";
ctx.fill();

// Troisième Lignes
ctx.beginPath();
ctx.moveTo(600, 180);
ctx.lineTo(600, 200);
ctx.lineTo(610, 210);
ctx.lineTo(620, 200);
ctx.lineTo(620, 180);
ctx.lineTo(610, 170);
ctx.fillStyle="#ea4e1a";
ctx.fill();

// Quatrième Lignes
ctx.beginPath();
ctx.moveTo(615, 220);
ctx.lineTo(615, 240);
ctx.lineTo(625, 250);
ctx.lineTo(635, 240);
ctx.lineTo(635, 220);
ctx.lineTo(625, 210);
ctx.fillStyle="#878787";
ctx.fill();

ctx.beginPath();
ctx.moveTo(585, 220);
ctx.lineTo(585, 240);
ctx.lineTo(595, 250);
ctx.lineTo(605, 240);
ctx.lineTo(605, 220);
ctx.lineTo(595, 210);
ctx.fillStyle="#ececec";
ctx.fill();

// Les Petits Losanges
ctx.beginPath();
ctx.moveTo(640, 160);
ctx.lineTo(640, 165);
ctx.lineTo(645, 170);
ctx.lineTo(650, 165);
ctx.lineTo(650, 160);
ctx.lineTo(645, 155);
ctx.fillStyle="#efefef";
ctx.fill();

ctx.beginPath();
ctx.moveTo(650, 170);
ctx.lineTo(650, 175);
ctx.lineTo(655, 180);
ctx.lineTo(660, 175);
ctx.lineTo(660, 170);
ctx.lineTo(655, 165);
ctx.fillStyle="#a4a4a4";
ctx.fill();

ctx.beginPath();
ctx.moveTo(660, 160);
ctx.lineTo(660, 165);
ctx.lineTo(665, 170);
ctx.lineTo(670, 165);
ctx.lineTo(670, 160);
ctx.lineTo(665, 155);
ctx.fillStyle="#ea4e1a";
ctx.fill();

// Texte
ctx.font = "30pt Verdana";
ctx.fillStyle = "#8e8e8e";
ctx.fillText("École du Numérique", 365, 430);
ctx.fillText("du Noyonnais", 365, 460);
