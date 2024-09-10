// За дублирование кода соре,
// времени продумывать логику
// для разных слейдеров в одном времени не было

let isSliderInit = false;

const init = () => {
  const slider = document.querySelector('.parts__slider');
  const sliderTrack = document.querySelector('.slider__track');
  const slides = Array.from(slider.querySelectorAll('.slider__item'));
  const prevButton = slider.querySelector('.prev-button');
  const nextButton = slider.querySelector('.next-button');
  const pagination = slider.querySelector('.slider__pagination');

  let slideWidth;
  let slideIndex = 0;
  let slidesPerView = 1;
  let gap = 20;
  let startX;
  let endX;

  if (window.innerWidth > 650) {
    if (isSliderInit) {
      isSliderInit = false;
      slider.classList.remove('init');
      sliderTrack.style.transform = 'none';
      slides.forEach(slide => {
        slide.style.minWidth = '';
      });
    }
    return;
  }

  if (isSliderInit) return;

  isSliderInit = true;
  slider.classList.add('init');

  if (slides.length <= slidesPerView) {
    slideIndex = 0;
  }

  if (slidesPerView <= 0 || slidesPerView > slides.length || !Number.isInteger(slidesPerView)) {
    slidesPerView = 1;
  }

  if (typeof gap !== 'number' || gap < 0) {
    gap = 0;
  }

  // создаем точки пагинации
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('span');
    dot.classList.add('slider__pagination-item');
    dot.addEventListener('click', () => {
      slideIndex = i;
      setSlidePosition();
    });
    pagination.appendChild(dot);
  }

  // устанавливаем активную точку пагинации
  function setActiveDot() {
    const dots = Array.from(document.querySelectorAll('.slider__pagination-item'));
    dots.forEach(dot => dot.classList.remove('active'));
    dots[slideIndex].classList.add('active');
  }


  function setSlidePosition() {
    sliderTrack.style.transform = `translateX(-${slideWidth * slideIndex + gap / slidesPerView * slideIndex}px)`;
    setActiveDot();
  }

  function calculateSlideWidth() {
    slideWidth = slider.clientWidth / slidesPerView;
    slides.forEach(slide => {
      slide.style.minWidth = `${slideWidth - (gap * (slidesPerView - 1) / slidesPerView)}px`;
    });
  }

  function setSlidesPerView() {
    calculateSlideWidth();
  }

  setSlidesPerView();

  function moveToNextSlide() {
    slideIndex += slidesPerView;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    setSlidePosition();
  }

  function moveToPrevSlide() {
    slideIndex -= slidesPerView;
    if (slideIndex < 0) {
      slideIndex = slides.length - slidesPerView;
    }
    setSlidePosition();
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
    startX = null;
    endX = null;
  });

  setSlidePosition();
};

window.addEventListener('resize', init);
window.addEventListener('DOMContentLoaded', init);
