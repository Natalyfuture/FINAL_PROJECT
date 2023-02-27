
import { Input } from './components/Input'
import { Form } from './components/Form';
import { Auth } from './components/AUTH';
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

const renderAppLayout = (user) => {
auth.user = user;
auth.renderHeaderControls();

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

/* const isLoggedIn = api.isLoggedIn();
if(isLoggedIn) {
    api.autoLogin()
}else{} */
/* const api = new API(); */
  /*  api.login({
    email: 'test5555@gmail.com',
    password: 'asdfghj'
}).then((res) => {
    console.log(res)
    api.getSelf()
}).catch((err) => {
    console.log('err', err)
})  
 */
/* api.register({
    email: 'aaaaaaa101@gmail.com',
    password: 'aaaaaaa10',
    name: 'aaaaaaa10'
}) *//* .then(() =>{ */
   /*  api.login({
    email: 'test5555@gmail.com',
    password: 'asdfghj',
    }).then((res) => {
        console.log('res', res)
        api.getSelf();
    }).catch((err) => {
        console.log('err', err)
    }) */
/* }) */







