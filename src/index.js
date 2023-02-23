
import {emailInput, passwordInput, nameInput} from './components/Input';
import { Form } from './components/Form';
import './styles/style.css';

const appContainer = document.getElementById('app');
const authForm = document.getElementById('auth-form');
const loginForm = new Form ({
    inputs: [emailInput, passwordInput],
    changeBtnText: 'REGISTER',
    title: 'LOGIN',
    onSubmit: (values) => console.log('values', values),
})

loginForm.render(authForm)

/* const formRegister = new Form({
    inputs: [emailInput, nameInput, passwordInput],
}); */




