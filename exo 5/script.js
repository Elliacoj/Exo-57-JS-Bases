let chiffre1 = prompt("Veuillez indiquer un chiffre avec une vigule: ");
let chiffre2 = prompt("Veuillez indiquer un autre chiffre avec une vigule: ");
let reponse = document.getElementById("reponse");

 reponse.innerHTML = (parseInt(chiffre1) * parseInt(chiffre2)).toString();