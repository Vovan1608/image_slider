// "use strict";

const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

slides.forEach((slide, index) => {
	slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener("click", () => {
	counter += 1;
	carousel();
});

prevBtn.addEventListener("click", () => {
	counter -= 1;
	carousel();
});

function carousel() {

	nextBtn.style.display = counter < slides.length - 1 ? "block" : "none";

	prevBtn.style.display = counter > 0 ? "block" : "none";
	
	slides.forEach(slide => {
		slide.style.transform = `translateX(-${counter * 100}%)`;
	});
}

prevBtn.style.display = "none";