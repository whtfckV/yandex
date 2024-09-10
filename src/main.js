import './assets/scss/style.scss'
import './slider';
import './parts-slider';

const root = document.querySelector(':root')

const container = document.getElementById('viewport');


container.addEventListener('mousemove', (e) => {
  const { offsetWidth, offsetHeight } = container;
  const x = (e.clientX / offsetWidth) * 100;
  const y = (e.clientY / offsetHeight) * 100;

  // Обновляем CSS-переменные
  root.style.setProperty('--mouse-x', `${x}%`);
  root.style.setProperty('--mouse-y', `${y}%`);
});