document.addEventListener('click', function(event) {
    console.log("dsffdfsdf")
  // Проверяем, что клик был по ссылке на другую страницу
  if (event.target.tagName === 'A' && event.target.hostname !== window.location.hostname) {
    // Отменяем стандартное поведение ссылки
    event.preventDefault();

    // Находим элемент, который нужно анимировать
    var element = document.body;

    // Добавляем класс для анимации
    element.classList.add('fade-out');

    // Устанавливаем задержку перед переходом на новую страницу
    setTimeout(function() {
      // Переходим на новую страницу
      window.location.href = event.target.href;
    }, 2000); // Время задержки в миллисекундах (в данном случае 0.5 секунды)
  }
});