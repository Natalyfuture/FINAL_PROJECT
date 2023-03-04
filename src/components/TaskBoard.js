import { Input } from "./Input";
import { Form } from "./Form";
import { Task } from "./Task";
import { taskBoardConfig} from "./configInputs";
import { api} from './API'

const getTaskForm = (onTaskCreated) =>
    new Form({
        inputs:  taskBoardConfig.map(input => new Input(input)),
        title: 'ADD TASK',
        submitBtnText: 'Add',
        onSubmit: async (data) => {
            
            const createdTask = await api.createTask(data);
            onTaskCreated(createdTask);
        },
    })

export class TaskBoard {
    constructor({appContainer}) {
       this.appContainer = appContainer;
       this.taskForm =  getTaskForm(this.addTask.bind(this))
       this.tasksContainer = document.createElement('div')//содержит карточки заданий
    }
    renderLayout() {
        const board = document.createElement('div'); // cодержит все карточки и taskForm
        const formContainer = document.createElement('div');//контейнер для формы

        board.classList.add('board');
        formContainer.classList.add('task-form');
        this.tasksContainer.classList.add('task-cards');

        board.append(formContainer, this.tasksContainer);
        this.taskForm.render(formContainer);

        this.appContainer.append(board)
    }

    addTask(taskData) {
        const task = new Task(taskData);

        task.renderTaskCard(this.tasksContainer)

    }

    logout() {
        this.tasksContainer.innerText = '';
    }

}
    