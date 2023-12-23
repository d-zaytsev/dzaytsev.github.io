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

var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('sendMessageButton')

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible m-4" role="alert">' + message

  alertPlaceholder.append(wrapper)
}

if (alertTrigger) {
  alertTrigger.addEventListener('click', function () {
    alert('Спасибо, ваше сообщение отправлено в космос!', 'success')
  })
}

