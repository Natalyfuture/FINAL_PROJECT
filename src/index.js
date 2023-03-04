
import { Input } from './components/Input'
import { Form } from './components/Form';
import { Auth } from './components/AUTH';
import { TaskBoard} from './components/TaskBoard'
import { api} from './components/API';
import './styles/style.css';

const appContainer = document.getElementById('app');

const onLoginSuccess = async() => {
    console.log('HELLO!')
    appContainer.innerHTML = '';
    const user = await api.getSelf();
    renderAppLayout(user);
}

const auth = new Auth({
    appContainer,
    onLoginSuccess,
})

export const taskBoard = new TaskBoard ({
    appContainer
})

const renderAppLayout = async (user) => {
auth.user = user;
auth.renderHeaderControls();
taskBoard.renderLayout();
const taskList = await api.getAllTasks();

taskList.forEach((task) => taskBoard.addTask(task))

}

const init = async () => {
    const isLoggedIn = api.isLoggedIn();
  
    if (!isLoggedIn) {
      auth.renderAuthForm();
    } else {
      const user = await api.autoLogin();
      renderAppLayout(user);
    }
  };
  
  init();











