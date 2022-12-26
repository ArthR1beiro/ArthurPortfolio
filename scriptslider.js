const slider = document.querySelectorAll(".slider");
const btnPrev = document.getElementById("prev-button");
const btnNext = document.getElementById("next-button");
const btnDesign = document.querySelectorAll(".button-design");

console.log(btnDesign);

const colors = [
  "#FFFFFF",
  "#F46E75",
  "#168C80",
  "#FFFFFF",
  "#6ECEC2",
  "#F8A52B",
];

// background: rgba(20, 36, 65, 0.315);

let currentSlide = 4;

slider[currentSlide].classList.add("on");

// btnDesign.style.fill = colors[currentSlide];
btnDesign.forEach((b) => {
  b.style.fill = colors[currentSlide];
});

function hideSlider() {
  slider.forEach((item) => item.classList.remove("on"));
}

function showSlider() {
  slider[currentSlide].classList.add("on");
}

function nextSlider() {
  hideSlider();
  if (currentSlide === slider.length - 1) {
    currentSlide = 0;
    // btnDesign.style.fill = colors[currentSlide];
    btnDesign.forEach((b) => {
      b.style.fill = colors[currentSlide];
    });
  } else {
    currentSlide++;
    // btnDesign.style.fill = colors[currentSlide];
    btnDesign.forEach((b) => {
      b.style.fill = colors[currentSlide];
    });
  }
  showSlider();
}

function prevSlider() {
  hideSlider();
  if (currentSlide === 0) {
    currentSlide = slider.length - 1;
    // btnDesign.style.fill = colors[currentSlide];
    btnDesign.forEach((b) => {
      b.style.fill = colors[currentSlide];
    });
  } else {
    currentSlide--;
    // btnDesign.style.fill = colors[currentSlide];
    btnDesign.forEach((b) => {
      b.style.fill = colors[currentSlide];
    });
  }
  showSlider();
}

btnNext.addEventListener("click", nextSlider);
btnPrev.addEventListener("click", prevSlider);
