const modal = document.getElementById("modal");

document.getElementById('burger').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
    this.classList.toggle('active'); // Добавляем/убираем класс active для бургер-меню
});

function sm(){

    modal.showModal();
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText) {
        // Получаем задачи из localStorage
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push({ text: taskText, status: 'inProgress' }); // Устанавливаем статус по умолчанию
        localStorage.setItem('tasks', JSON.stringify(tasks));
        alert('Задача добавлена!');
        taskInput.value = ''; // Очистить поле ввода
        window.location.href = 'tasks.html';
    } else {
        alert('Пожалуйста, введите задачу!');
    }
    
}



function goBack() {
    window.location.href = 'tasks.html'; // Возвращаемся на главную страницу
    overlay.style.display = 'none';
}

modal.addEventListener('click', (event) => {
    const dialogDimensions = modal.getBoundingClientRect();
    if (
        event.clientX < dialogDimensions.left ||
        event.clientX > dialogDimensions.right ||
        event.clientY < dialogDimensions.top ||
        event.clientY > dialogDimensions.bottom
    ) {
        // Клик был вне модального окна (на backdrop)
        modal.close();
    }
});
