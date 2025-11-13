// DOM
const touches = [...document.querySelectorAll(".boutton")];
const listeKeycode = touches.map((touche) => touche.dataset.key);
const ecran = document.querySelector(".ecran");

document.addEventListener("keydown", (e) => {
	const valeur = e.keyCode.toString(); // Recupere la valeur quand on tape au clavier //
	calculer(valeur);
});

document.addEventListener("click", (e) => {
	const valeur = e.target.dataset.key; // Recupere la valeur quand on tape au clavier//
	calculer(valeur);
});

const calculer = (valeur) => {
	if (listeKeycode.includes(valeur))
	switch (valeur) {
		case "8": ecran.textContent = ""; break;
		case "187":
		const calcul = eval(ecran.textContent);
		ecran.textContent = calcul;
		break;

		default:
			const indiceKeyCode = listeKeycode.indexOf(valeur);
			const touche = touches[indiceKeyCode];
			ecran.textContent += touche.innerHTML;
	}
};

window.addEventListener('error', (e) => {
	alert('Une erreur est survenue dans votre calcul : ' + e.message);
})