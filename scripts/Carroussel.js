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
  "#F8F44B",
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

const projectText = document.querySelectorAll(".project-text");
const projectImg = document.querySelectorAll(".project-img");
const projectBtnPrev = document.getElementById("project-prev-button");
const projectBtnNext = document.getElementById("project-next-button");
const projectBtnDesign = document.querySelectorAll(".project-button-design");

console.log(btnDesign);

const projectColors = [
  "#6ECEC2",
  "#E23D3E",
  "#FFFFFF",
  "#552175",
  "#6ECEC2",
  "#6ECEC2",
];

let currentState = 0;

projectText[currentState].classList.add("project-text-on");

projectBtnDesign.forEach((p) => {
  p.style.fill = projectColors[currentState];
});

function hideProjectText() {
  projectText.forEach((item) => item.classList.remove("project-text-on"));
}

function showProjectText() {
  projectText[currentState].classList.add("project-text-on");
}

projectImg[currentState].classList.add("project-img-on");

function hideProjectImg() {
  projectImg.forEach((item) => item.classList.remove("project-img-on"));
}

function showProjectImg() {
  projectImg[currentState].classList.add("project-img-on");
}

function nextState() {
  hideProjectText();
  hideProjectImg();
  if (currentState === projectText.length - 1) {
    currentState = 0;
    projectBtnDesign.forEach((p) => {
      p.style.fill = projectColors[currentState];
    });
  } else {
    currentState++;

    projectBtnDesign.forEach((p) => {
      p.style.fill = projectColors[currentState];
    });
  }
  showProjectText();
  showProjectImg();
}

function prevState() {
  hideProjectText();
  hideProjectImg();
  if (currentState === 0) {
    currentState = projectText.length - 1;
    projectBtnDesign.forEach((p) => {
      p.style.fill = projectColors[currentState];
    });
  } else {
    currentState--;
    projectBtnDesign.forEach((p) => {
      p.style.fill = projectColors[currentState];
    });
  }
  showProjectImg();
  showProjectText();
}

projectBtnNext.addEventListener("click", nextState);
projectBtnPrev.addEventListener("click", prevState);
