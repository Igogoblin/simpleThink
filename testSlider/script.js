const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");
let index = 1;

function showSlide(i) {
  index += i;
  if (index >= slide.length) {
    index = 0;
  } else if (index < 0) {
    index = slide.length - 1;
  }
  slides.style.transform = "translateX(" + -index * 100 + "%)";
}

document.querySelector(".prev").addEventListener("click", function () {
  showSlide(-1);
});

document.querySelector(".next").addEventListener("click", function () {
  showSlide(1);
});
