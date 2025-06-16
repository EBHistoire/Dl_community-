
function login() {
  const pass = document.getElementById("password").value;
  if (pass === "dlm2025") {
    document.getElementById("editor").style.display = "block";
    fetch("accueil.txt")
      .then(response => response.text())
      .then(text => {
        document.getElementById("adminText").value = text;
      });
  } else {
    alert("Mot de passe incorrect.");
  }
}

function saveText() {
  const newText = document.getElementById("adminText").value;
  fetch("accueil.txt", {
    method: "POST",
    headers: { "Content-Type": "text/plain" },
    body: newText
  }).then(() => alert("Texte mis à jour !"));
}
