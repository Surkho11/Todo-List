// Находим элементы на странице

const form = document.querySelector('#form');
const taskInput = document.querySelector('#taskInput');

form.addEventListener('submit', function (event) {
	// отменяем отправку формы
	event.preventDefault();
	
	// Достаем текст задачи из поля ввода
	const taskText = taskInput.value;

	// Форматируем разметку для новой задачи
})