const shifterText = document.querySelectorAll(".text-hero");
const shifterRef = document.querySelectorAll(".ref-hero");

let currentText = 3;

shifterText[currentText].classList.add("text-hero-on");

function hideText() {
  shifterText.forEach((item) => item.classList.remove("text-hero-on"));
}

function showText() {
  shifterText[currentText].classList.add("text-hero-on");
}
setInterval(function () {
  hideText();
  if (currentText === shifterText.length - 1) {
    currentText = 0;
  } else {
    currentText++;
  }
  showText();
}, 5000);

let currentRef = 3;

shifterRef[currentRef].classList.add("ref-hero-on");

function hideRef() {
  shifterRef.forEach((item) => item.classList.remove("ref-hero-on"));
}

function showRef() {
  shifterRef[currentRef].classList.add("ref-hero-on");
}
setInterval(function () {
  hideRef();
  if (currentRef === shifterRef.length - 1) {
    currentRef = 0;
  } else {
    currentRef++;
  }
  showRef();
}, 5000);
