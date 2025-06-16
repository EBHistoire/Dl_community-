
// Charger le texte d’accueil depuis le fichier texte
fetch("accueil.txt")
  .then(response => response.text())
  .then(text => {
    document.getElementById("accueilText").innerText = text;
  });
