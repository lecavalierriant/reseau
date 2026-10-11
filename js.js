function cacherImagesInternet() {
	imgInternet = document.querySelectorAll(".internet");
	imgInternet.forEach(img => img.style.display = "none");
}

function basculerImages() {
	imgInternet = document.querySelectorAll(".internet");
	imgRéseau = document.querySelectorAll(".réseau");
	imgRéseau.forEach(img => img.style.display = img.style.display == "none" ? "block" : "none");
	imgInternet.forEach(img => img.style.display = img.style.display == "none" ? "block" : "none");
}
