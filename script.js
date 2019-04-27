let darkLink = document.querySelectorAll("footer a")[0];
let lightLink = document.querySelectorAll("footer a")[1];
let mijnCSS = document.querySelector("#switchcss");

function switchToLight() {
	mijnCSS.setAttribute("href","stijl-light.css");
}
function switchToDark() {
	mijnCSS.setAttribute("href","stijl-dark.css");
}
lightLink.addEventListener("click",switchToLight);
darkLink.addEventListener("click",switchToDark);

// menuknop
let menuKnop = document.querySelector(".icon");
let navMenu = document.querySelector("nav");

$(document).ready(function(){
	$('.icon').click(function() {
		$('.icon').toggleClass('active');
		navMenu.classList.toggle('onzichtbaar');
	})
})

var slideIndex = 0;
showSlides();

function showSlides() {
	var i;
	var slides = document.querySelectorAll(".slider li");
	console.log(slides);
	for (i = 0; i < slides.length; i++) {
		slides[i].style.opacity = "0";
	}
	slideIndex++;
	if (slideIndex > slides.length) { slideIndex = 1 }
	slides[slideIndex - 1].style.opacity = "1";
	setTimeout(showSlides, 5000);
}
//fotografie
$(function () {
setTimeout(function() {
	$('.flyinn').removeClass('hidden')
}, 500)
})();
