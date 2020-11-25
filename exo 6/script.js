let age = prompt('Quel est votre âge?');
let reponse = document.getElementById("reponse");

if (age < 17) {
    reponse.innerHTML = "Vous êtes mineur";
}
else {
    reponse.innerHTML = "Vous êtes majeur";
}