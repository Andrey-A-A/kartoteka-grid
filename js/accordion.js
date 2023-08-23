const accordionButtons = document.querySelectorAll('h3.item');

accordionButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    accordionButtons.forEach((button) => {
      button.classList.remove('h3.item-active');
    }) //этот блок нужен для того, чтобы при клике по закрытой кнопке она открывалась, а открытая закрывалась.

    btn.classList.toggle('item-active'); //при клике по кнопке переключаю направление галочки
    btn.parentElement.lastElementChild.style.display = btn.parentElement.lastElementChild.style.display == 'none' ? 'block' : 'none'; //скрываю/показываю блок

  })
})