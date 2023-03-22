let points = 0

function save(){
    alert("Votre partie est sauvegarder")
}

function incrementClick() {
    updateDisplay(++points);
}

function resetCounter() {
    counterVal = 0;
    updateDisplay(points);
}

function updateDisplay(val) {
    document.getElementById("counter-label").innerHTML = val;


}
//julien

const compteur = document.querySelector('#counter-label');

function miseAjourAffichagePoints(){
    compteur.textContent = points;
}

function ajoutPoints(valeur){
    points = points + valeur;
    miseAjourAffichagePoints();
}

function retirerPoints(valeur){
    points = points - valeur;
    miseAjourAffichagePoints();
}

const developpeur = document.querySelector('#developpeur');

const nbDeveloppeuraffichage = document.querySelector('#nbDeveloppeur');

const prixDeveloppeurAffichage = document.querySelector('#prixDeveloppeurAffichage');

let nombreDeveloppeur = 0;
let prixDeveloppeur = 10;

developpeur.addEventListener('click', () =>{
    if (points >=prixDeveloppeur){
        retirerPoints(prixDeveloppeur);
        nombreDeveloppeur++;
        nbDeveloppeuraffichage.textContent = nombreDeveloppeur;
        prixDeveloppeur = prixDeveloppeur *2;
        prixDeveloppeurAffichage.textContent = prixDeveloppeur;
    }
    else{
        alert('Pas assez de clic');
    }
})

setInterval(() =>{
    ajoutPoints(nombreDeveloppeur * 2);
    document.querySelector('#developpeur').textContent;
},1000)
