const slider = document.querySelector('.participants-slider');
const sliderTrack = slider.querySelector('.slider__track');
const slides = Array.from(slider.querySelectorAll('.slider__item'));
const prevButton = slider.querySelector('.prev-button');
const nextButton = slider.querySelector('.next-button');
const current = slider.querySelector('.current-slide');

let autoSlideInterval = setInterval(moveToNextSlide, 4000);

let slideWidth;
let slideIndex = 0;
let slidesPerView = 3;
let gap = 20;
let startX = 0;
let endX = 0;

sliderTrack.style.gap = `${gap}px`;
current.textContent = slideIndex + slidesPerView;

// Усталь искать правильный расчет перемещения, сдела максимально приближенный на всех разрешениях
// Там есть промах на пару пикселей
function setSlidePosition() {
  sliderTrack.style.transform = `translateX(-${slideWidth * slideIndex + gap / slidesPerView * slideIndex}px)`;
  current.textContent = slideIndex + slidesPerView;
}

function calculateSlideWidth() {
  slideWidth = slider.clientWidth / slidesPerView;
  slides.forEach(slide => {
    slide.style.minWidth = `${slideWidth - (gap * (slidesPerView - 1) / slidesPerView)}px`;
  });
}

function setSlidesPerView() {
  if (window.innerWidth >= 949) {
    slidesPerView = 3;
  } else if (window.innerWidth >= 599) {
    slidesPerView = 2;
  } else {
    slidesPerView = 1;
  }
  calculateSlideWidth();
}

setSlidesPerView();

function moveToNextSlide() {
  slideIndex += slidesPerView;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  setSlidePosition();
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(moveToNextSlide, 4000);
}

function moveToPrevSlide() {
  slideIndex -= slidesPerView;
  if (slideIndex < 0) {
    slideIndex = slides.length - slidesPerView;
  }
  setSlidePosition();
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(moveToNextSlide, 4000);
}

prevButton.addEventListener('click', moveToPrevSlide);
nextButton.addEventListener('click', moveToNextSlide);
sliderTrack.addEventListener('touchstart', (event) => {
  startX = event.touches[0].clientX;
});

sliderTrack.addEventListener('touchmove', (event) => {
  endX = event.touches[0].clientX;
});

sliderTrack.addEventListener('touchend', () => {
  if (startX - endX > 50) {
    moveToNextSlide();
  } else if (endX - startX > 50) {
    moveToPrevSlide();
  }
  startX = 0;
  endX = 0;
});

window.addEventListener('resize', () => {
  setSlidesPerView();
  setSlidePosition();
});
