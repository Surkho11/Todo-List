// Находим элементы на странице

const form = document.querySelector('#form');
const taskInput = document.querySelector('#taskInput');
const taskList = document.querySelector('#tasksList');

form.addEventListener('submit', function (event) {
	// отменяем отправку формы
	event.preventDefault();
	
	// Достаем текст задачи из поля ввода
	const taskText = taskInput.value;

	// Форматируем разметку для новой задачи
	const taskHTML = `
				<li class="list-group-item d-flex justify-content-between task-item">
					<span class="task-title">${taskText}</span>
					<div class="task-item__buttons">
						<button type="button" data-action="done" class="btn-action">
							<img src="./img/tick.svg" alt="Done" width="18" height="18">
						</button>
						<button type="button" data-action="delete" class="btn-action">
							<img src="./img/cross.svg" alt="Done" width="18" height="18">
						</button>
					</div>
				</li>
	`
	// Добавляем задачу на страницу

	taskList.insertAdjacentHTML('beforeend', taskHTML);
})