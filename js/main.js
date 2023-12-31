// Находим элементы на странице

const form = document.querySelector('#form');
const taskInput = document.querySelector('#taskInput');
const taskList = document.querySelector('#tasksList');
const emptyList = document.querySelector('#emptyList')


// Добавление задачи
form.addEventListener('submit', addTask)


// Удаление задачи
taskList.addEventListener('click', deleteTask)

// Отмечаем задачу завершенной
taskList.addEventListener('click', doneTask)

function doneTask(event) {

	if (event.target.dataset.action == 'done') {
		const parenNode = event.target.closest('.list-group-item')
		const taskTitle = parenNode.querySelector('.task-title');
		taskTitle.classList.add('task-title--done')
	}
}

function deleteTask(event) {
	console.log(event.target);

	if (event.target.dataset.action === 'delete') {
		const parenNode = event.target.closest('.list-group-item')
		parenNode.remove()
	}

	if (taskList.children.length === 1 ) {
		emptyList.classList.remove('none')
	}
}


function addTask(event) {
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

	// Очищаем поле ввода и возвращаем на него фокус
	taskInput.value = '';
	taskInput.focus();

	if (taskList.children.length > 1 ) {
		emptyList.classList.add('none')
	}
}