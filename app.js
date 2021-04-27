"use strict";

const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

slides.forEach((slide, idx) => {
	slide.style.left = `${index * 100}px`;
});