const navItems = document.querySelectorAll('.nav-item');

    // Добавляем обработчик события для каждого элемента
navItems.forEach(item => {
    item.addEventListener('click', () => {
        const targetPage = item.getAttribute('data-target');
        if (targetPage) {
            // Переходим на указанную страницу
            window.location.href = targetPage;
        }
    });
});