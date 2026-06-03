const titrePageParent = window.parent.document.title;
const pages = {
	"Accueil": "index.html",
	"Locomotives": "locomotives.html",
	"Voitures": "voitures.html",
	"Wagons": "wagons.html",
	"Maquettes": "maquettes.html",
	"Rails": "rails.html"
};

function cacherImagesInternet() {
	const imgInternet = document.querySelectorAll(".img-internet");
	imgInternet.forEach(img => img.style.display = "none");
}

function basculerImages() {
	const imgInternet = document.querySelectorAll(".img-internet");
	const imgRéseau = document.querySelectorAll(".img-réseau");
	imgRéseau.forEach(img => img.style.display = img.style.display === "none" ? "block" : "none");
	imgInternet.forEach(img => img.style.display = img.style.display === "none" ? "block" : "none");
}
