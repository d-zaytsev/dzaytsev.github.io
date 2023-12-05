// Найти кнопку по классу
const scrollButton = document.querySelector('.scroll-to-bottom');

// Добавить обработчик клика
scrollButton.addEventListener('click', () => {
    // Прокрутить страницу вниз
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth' // Добавим плавности прокрутке
  });
});
