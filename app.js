"use strict";

const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

slides.forEach((slide, idx) => {
	slide.style.left = `${index * 100}px`;
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

const carousel = () => {
	slides.forEach(slide => {
		slide.style.transform = `translateX(-${counter * 100}%)`;
	});
}