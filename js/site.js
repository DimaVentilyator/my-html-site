document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('magic-btn');
    const message = document.getElementById('secret-message');

    button.addEventListener('click', function() {
        // Показываем скрытый текст
        message.classList.remove('hidden');
        // Меняем текст на кнопке
        button.textContent = 'Сработало!';
        // Блокируем кнопку, чтобы не нажимали много раз
        button.disabled = true;
        button.style.backgroundColor = '#ccc';
    });
});