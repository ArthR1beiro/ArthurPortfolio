const shifterText = document.querySelectorAll(".text-hero");
const shifterRef = document.querySelectorAll(".ref-hero");
const shifterImg = document.querySelectorAll(".img-mask");

let currentText = 0;

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
}, 6500);

let currentRef = 0;

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
}, 6500);

let currentImg = 0;

shifterImg[currentImg].classList.add("img-mask-on");

function hideImg() {
  shifterImg.forEach((item) => item.classList.remove("img-mask-on"));
}

function showImg() {
  shifterImg[currentImg].classList.add("img-mask-on");
}

setInterval(function () {
  hideImg();
  if (currentImg === shifterImg.length - 1) {
    currentImg = 0;
  } else {
    currentImg++;
  }
  showImg();
}, 6500);
