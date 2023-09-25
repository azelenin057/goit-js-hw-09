import throttle from 'lodash.throttle';

const refs = {
  body: document.body,
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
};

console.log(refs.btnStop);

refs.btnStart.addEventListener('click', changeColor);
refs.btnStop.addEventListener('click', onBtnStop);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

console.log(getRandomHexColor());

let timerInteval = ''; //Виніс змінну таймеру за функцію, для того щоб мати доступ до нього в різних функціях.(Щоб зупинити його)

function changeColor() {
  timerInteval = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
    refs.btnStart.disabled = true;
  }, 1000);
}

function onBtnStop() {
  clearInterval(timerInteval);
  refs.btnStart.disabled = false;
}
