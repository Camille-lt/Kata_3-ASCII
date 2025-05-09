const calendrierDuCrayon = {
    septembre: 10,
    octobre: 9,
    novembre: 8,
    decembre: 7,
    janvier: 6,
    fevrier: 5,
    mars: 4,
    avril: 3,
    mai: 2,
    juin: 1,
};

function drawMyPen (mois) {
const nbrEtages = calendrierDuCrayon[mois];
let pen = '';

pen += ' /\\\n/__\\\n';
for (let i = 0; i < nbrEtages; i++) {
    pen += '||||\n';  // Ajouter un étage à chaque itération
}
if (nbrEtages < 5) {

    pen += '|__|\n';
} 
else {
    pen += '|__|\n|  |\n|__|\n'; 
}
return pen
}
console.log(drawMyPen('septembre'));
console.log(drawMyPen('fevrier'));
console.log(drawMyPen('mars'));
console.log(drawMyPen('juin'));

