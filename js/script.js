setInterval(function () {
  const timerBlock = document.querySelector('.timer__time');
  const date = new Date();
  const hours = date.getHours(); //выводит то время какое есть в этом часовом поясе, а не по гринвичу
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const fHours = hours < 10 ? '0' + hours : hours;
  const fMinutes = minutes < 10 ? '0' + minutes : minutes;
  const fSeconds = seconds < 10 ? '0' + seconds : seconds;
  //timerBlock.textContent = `${fHours}:${fMinutes}:${fSeconds}`;
  timerBlock.textContent = fHours + ':' + fMinutes + ':' + fSeconds;
}, 500)

