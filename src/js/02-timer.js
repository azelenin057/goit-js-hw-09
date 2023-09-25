import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  datetime: document.querySelector('#datetime-picker'),
  btnStartTimer: document.querySelector('[data-start]'),
  timerDays: document.querySelector('[data-days]'),
  timerHours: document.querySelector('[data-hours]'),
  timerMinutes: document.querySelector('[data-minutes]'),
  timerSeconds: document.querySelector('[data-seconds]'),
};

refs.btnStartTimer.disabled = true;
let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentDate = new Date();
    if (selectedDates[0].getTime() - currentDate.getTime() > 0) {
      refs.btnStartTimer.disabled = false;
    } else {
      refs.btnStartTimer.disabled = true;
      window.alert('Please choose a date in the future');
    }
    console.log(selectedDates[0]);
  },
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}

function onTimerStart() {
  const selectedDate = fp.selectedDates[0];

  timerId = setInterval(() => {
    const startTime = new Date();
    const countdown = selectedDate - startTime;
    refs.btnStartTimer.disabled = true;

    if (countdown < 0) {
      clearInterval(timerId);
      return;
    }
    updateTimerFace(convertMs(countdown));
  }, 1000);
}

function updateTimerFace({ days, hours, minutes, seconds }) {
  refs.timerDays.textContent = addLeadingZero(days);
  refs.timerHours.textContent = addLeadingZero(hours);
  refs.timerMinutes.textContent = addLeadingZero(minutes);
  refs.timerSeconds.textContent = addLeadingZero(seconds);
}

const fp = flatpickr(refs.datetime, options);

refs.btnStartTimer.addEventListener('click', onTimerStart);
