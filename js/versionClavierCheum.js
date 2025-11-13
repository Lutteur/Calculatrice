// DOM
const touches = [...document.querySelectorAll(".boutton")];
const valeurs = touches.map((touche) => touche.innerText);
const ecran = document.querySelector(".ecran");

// Gestion clavier
document.addEventListener("keydown", (e) => {
	const key = e.key;

	if (valeurs.includes(key)) {
		calculer(key);
	} else if (key === "Enter") {
		calculer("=");
	} else if (key.toLowerCase() === "c") {
		calculer("C");
	}
});

// Gestion clic souris
document.addEventListener("click", (e) => {
	if (e.target.classList.contains("boutton")) {
		const valeur = e.target.innerText;
		calculer(valeur);
	}
});

// Fonction principale
const calculer = (valeur) => {
	switch (valeur) {
		case "C":
			ecran.textContent = "";
			break;

		case "=":
			try {
				const calcul = eval(ecran.textContent);
				ecran.textContent = calcul;
			} catch (e) {
				ecran.textContent = "Erreur";
			}
			break;

		default:
			ecran.textContent += valeur;
	}
};

// Gestion des erreurs globales
window.addEventListener("error", (e) => {
	alert("Une erreur est survenue dans votre calcul : " + e.message);
});