import { api }  from './API';

export class Task {
    constructor({
       name,
       description,
        timeTracked,
        isActive,
        isFinished,
        _id,
        createdAt,
    }){
        this.name = name;
        this.description = description;
        this.timeTracked = timeTracked;
        this.isActive = isActive;
        this.isFinished = isFinished;
        this.createdAt = new Date(createdAt);

        this.id = _id;

        this.taskCard = document.createElement('div');//глобальная карточка, которая содержит все остальное.
        this.taskContent = document.createElement('div');
        this.deleteBtn = document.createElement('button');// кнопка, которая удаляет карточку(крестик);
        this.timerBtn = document.createElement('button'); //кнопка, которая работает с таймером;
        this.timeTrackedElement = document.createElement('span');// элемент, содержащи колличество затреканого времени;
        this.markAsDoneBtn = document.createElement('button');
        this.restartBtn = document.createElement('button'); //кнопка, которая отмечает задачу как сделаную или начать віполнять
        this.timeTrackedIntervalId = null; // на фротнэнде отвечает за запуск секундомера
    }

    renderTaskCard(container) {
        const titleElem = document.createElement('h3');
        const descriptionElem = document.createElement('p');
        const timeTracker = document.createElement('div');//кнопка + трєкер
        const dateElement = document.createElement('p');

        titleElem.classList.add('task-title');
        descriptionElem.classList.add('task-description');
        timeTracker.classList.add('time-tracker');
        dateElement.classList.add('task-date');

        this.taskCard.classList.add('task-card');
        this.deleteBtn.classList.add('task-delete-btn');
        this.timerBtn.classList.add('timer-btn');
        this.markAsDoneBtn.classList.add('button', 'button_task', 'btn-small');
        this.restartBtn.classList.add('button', 'button_task', 'btn-small', 'disabled-btn');

        if(this.isFinished){

            this.timerBtn.setAttribute('disabled', '');
            this.taskCard.classList.add('task-finished');
            this.restartBtn.innerText = 'Restart';
            
        }else{
            this.timerBtn.classList.add(
                this.isActive ? 'timer-btn-stop' : 'timer-btn-play'
            );
            this.markAsDoneBtn.innerText = 'Mark as done';
            
        }

        titleElem.innerText = this.name;
        descriptionElem.innerText = this.description;

        dateElement.innerText = Task.getFormattedDate(this.createdAt);
        this.timeTrackedElement.innerText = Task.getFormattedTimeTracked(this.timeTracked);
        this.deleteBtn.innerHTML = '<i class="fas fa-times"></i>';

        if(this.isActive){
            this.startTracker();
            this.timerBtn.innerHTML = `<i class="fas fa-pause"></i>`;
        }else{
            this.timerBtn.innerHTML = `<i class="fas fa-play"></i>`; 
        }

        timeTracker.append(this.timerBtn, this.timeTrackedElement);

        this.taskContent.append(
            titleElem,
            descriptionElem,
            timeTracker,
            dateElement,
            this.deleteBtn,
        )

        this.taskCard.append(
            this.taskContent,
            this.markAsDoneBtn,
            this.restartBtn,
            
        );

        container.append(this.taskCard);

        this.timerBtn.addEventListener('click', this.toggleTimeTracker);
        this.deleteBtn.addEventListener('click', this.removeTaskCard);
        this.restartBtn.addEventListener('click', this.restartTracker);
        this.markAsDoneBtn.addEventListener('click', this.toggleTaskFinished);
      
        console.log(this.isActive) 
        console.log('Task5', this.isFinished)
        
    }
  
    removeTaskCard =  async () => {
        await api.deleteTask(this.id);
        this.taskCard.remove()
    };

    toggleTimeTracker = async () => {
        this.isActive = !this.isActive;

        await api.editTask(this.id, {isActive: this.isActive});

        if(this.isActive) {
            this.startTracker();
        } else {
            this.stopTracker();
        }

    };

    toggleTaskFinished = async () => {
        this.isFinished = !this.isFinished;

        await api.editTask(this.id, { isFinished: this.isFinished});

        this.taskContent.classList.toggle('task-finished');

        if(this.isFinished){
            this.timerBtn.setAttribute('disabled', '');
            this.markAsDoneBtn.classList.remove('active-btn') 
            this.markAsDoneBtn.classList.add('disabled-btn') 
            this.restartBtn.classList.remove('disabled-btn')  
            this.restartBtn.classList.add('active-btn')  
            this.restartBtn.innerText = 'Restart'        
            this.stopTracker();

        } else {
            clearInterval(this.timeTrackedIntervalId);
            this.timerBtn.removeAttribute('disabled');
            this.markAsDoneBtn.classList.remove('disabled-btn') 
            this.markAsDoneBtn.classList.add('active-btn') 
            this.markAsDoneBtn.innerText = 'Mark as done';
            this.restartBtn.classList.remove('active-btn')  
            this.restartBtn.classList.add('disabled-btn') 
            
            this.startTracker()
        }
    };

    

    startTracker(){

        this.timerBtn.classList.remove('timer-btn-play');
        this.timerBtn.classList.add('timer-btn-stop');
        this.timerBtn.innerHTML = `<i class="fas fa-pause"></i>`;

        if(this.timeTrackedIntervalId == null){
            this.timeTrackedIntervalId = setInterval(() => {
                this.timeTracked += 1000;
                this.updateTimeTracker();
            }, 1000);
        } 
    }

    stopTracker(){
        this.timerBtn.classList.remove('timer-btn-stop');
        this.timerBtn.classList.add('timer-btn-play');
        this.timerBtn.innerHTML = `<i class="fas fa-play"></i>`;
        
        clearInterval(this.timeTrackedIntervalId);
        this.timeTrackedIntervalId = null;
    }

    restartTracker = async () =>{
        
        this.timeTracked = 0;
        this.updateTimeTracker()
        this.isActive = false;
        this.isFinished = false;

        await api.editTask(this.id, { isFinished: this.isFinished});
        await api.editTask(this.id, {isActive: this.isActive});
        await api.editTask(this.id, {timeTracked: this.timeTracked});

        this.markAsDoneBtn.classList.remove('disabled-btn') 
        this.markAsDoneBtn.classList.add('active-btn') 
        this.restartBtn.classList.remove('active-btn')  
        this.restartBtn.classList.add('disabled-btn') 
        this.timerBtn.removeAttribute('disabled');
        this.taskContent.classList.toggle('task-finished');

        this.timerBtn.classList.add('timer-btn-play');
        this.timerBtn.innerHTML = `<i class="fas fa-play"></i>`;
         /* this.isActive = !this.isActive; */
        console.log(this.isActive) 
        console.log('Task5', this.isFinished)
    }

    updateTimeTracker(){
        const formatted = Task.getFormattedTimeTracked(this.timeTracked);
        this.timeTrackedElement.innerText = formatted;

    }

    

    static getFormattedDate(d) {
        const date = d.toLocaleDateString();
        const time = d.toLocaleTimeString();

        return `${date} ${time}`;
    }

    static addOptionalZero(value) {
        return value > 9 ? value : `0${value}`;
    }

    static getFormattedTimeTracked(timeTracked) {
        const timeTrackedSeconds = Math.floor(timeTracked / 1000);
        const hours =  Math.floor(timeTrackedSeconds / 3600);
        const minutes =  Math.floor((timeTrackedSeconds  - hours * 3600 )/ 60);
        const seconds = timeTrackedSeconds - hours * 3600 - minutes * 60;

        return `${this.addOptionalZero(hours)}:${this.addOptionalZero(minutes)}:${this.addOptionalZero(seconds)}`;
    }


}