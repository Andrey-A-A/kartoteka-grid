setInterval(function () {
  const timerBlock = document.querySelector('.timer__time');
  const date = new Date();
  const hours = date.getHours(); //выводит то время какое есть в этом часовом поясе, а не по гринвичу
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const fHours = hours < 10 ? '0' + hours : hours;
  const fMinutes = minutes < 10 ? '0' + minutes : minutes;
  const fSeconds = seconds < 10 ? '0' + seconds : seconds;
  timerBlock.textContent = fHours + ':' + fMinutes + ':' + fSeconds;
}, 500)

const fontSize = () => {
  let block1 = document.querySelector('.item-1');
  let block2 = document.querySelector('.item-2');
  let block3 = document.querySelector('.item-3');
  let block4 = document.querySelector('.item-4');
  let block5 = document.querySelector('.item-5');
  let block6 = document.querySelector('.item-6');
  let block7 = document.querySelector('.item-7');
  let block1H2 = document.querySelector('.item-1 h2');
  let block2H2 = document.querySelector('.item-2 h2');
  let block3H2 = document.querySelector('.item-3 h2');
  let block4H2 = document.querySelector('.item-4 h2');
  let block5H2 = document.querySelector('.item-5 h2');
  let block6H2 = document.querySelector('.item-6 h2');
  let block7H2 = document.querySelector('.item-7 h2');
  let block7H3 = document.querySelector('.item-7 h3');
  let block7A = document.querySelector('.item-7 a');
  let block2P = document.querySelector('.item-2 p');
  let paragraf = document.querySelectorAll('.item-7 p');
  let block6Select = document.querySelector('.item-6 .select');
  let w1 = block1.offsetWidth;
  let w2 = block2.offsetWidth;
  let w3 = block3.offsetWidth;
  let w4 = block4.offsetWidth;
  let w5 = block5.offsetWidth;
  let w6 = block6.offsetWidth;
  let w7 = block7.offsetWidth;
  block1H2.style.fontSize = w1 / 32.81 + "px";
  block2H2.style.fontSize = w2 / 32.81 + "px";
  block3H2.style.fontSize = w3 / 32.81 + "px";
  block4H2.style.fontSize = w4 / 32.81 + "px";
  block5H2.style.fontSize = w5 / 32.81 + "px";
  block6H2.style.fontSize = w6 / 32.81 + "px";
  block7H2.style.fontSize = w7 / 32.81 + "px";
  block7H3.style.fontSize = w7 / 37.5 + "px";
  block7A.style.fontSize = w7 / 37.5 + "px";
  block2P.style.fontSize = w2 / 37.5 + "px";
  paragraf.forEach((p) => {
    p.style.fontSize = w7 / 37.5 + "px";
  })
  block6Select.style.fontSize = w6 / 37.5 + "px";
}


window.onload = fontSize;
window.onresize = fontSize;

