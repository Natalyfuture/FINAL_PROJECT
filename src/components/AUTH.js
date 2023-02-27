import { api } from "./API";
import { Input } from './Input';
import { Form } from './Form';
import {loginConfig, registerConfig} from './configInputs'

const getLoginForm = (onSuccess) => 
    new Form({
    inputs: loginConfig.map(input => new Input(input)),
    submitBtnText: 'Submit',
    title: 'LOGIN',
    onSubmit: async (data) => {
        await api.login(data);
        onSuccess()
    }
    })

const getRegisterForm =(onSuccess) => 
    new Form({
    inputs: registerConfig.map(input => new Input(input)),
    submitBtnText: 'Submit',
    title: 'REGISTER',
    onSubmit: async (data) => {
        await api.register(data);
        onSuccess()
    }
});


export class Auth {
    constructor({appContainer, onLoginSuccess}) {
        this.appContainer = appContainer;

        this.formContainer = document.createElement('div');
        this.switchBtn = document.createElement('button');
        this.logoutBtn = document.createElement('button');
        this.avatar = document.createElement('span');

        this.form = null;
        this.user = null;
        this.isLogin = true // login | register

        this.loginForm = getLoginForm(onLoginSuccess);
        this.registerForm = getRegisterForm(this.switchForms.bind(this));

        this.createFormContainer();
        this.createHeaderControls();
    }

    createFormContainer() {
        this.formContainer.classList.add('auth-form');
        this.switchBtn.classList.add('text-registration');
        this.switchBtn.innerText = 'REGISTER';
        this.formContainer.prepend(this.switchBtn);

        this.switchBtn.addEventListener('click', () => {
            this.switchForms()
        })
    }

    createHeaderControls(){
        this.logoutBtn.classList.add('button', 'button_text');
        this.logoutBtn.innerText = 'Logout';
        this.avatar.classList.add('avatar');

        this.logoutBtn.addEventListener('click', () => {
            this.logout();
            api.logout()
        });

    }

    renderHeaderControls(){
        const controlContainer = document.getElementById('header-controls');
        this.avatar.innerText = this.user.name[0];

        controlContainer.append(this.logoutBtn, this.avatar)        
    }

    renderAuthForm(){
        if(this.form) {
            this.form.form.remove()
        }

        if(this.isLogin){
            this.form = this.loginForm;
        }else {
            this.form = this.registerForm;
        }
       
        this.form.render(this.formContainer)
        this.appContainer.append(this.formContainer) 

        }

    switchForms(){
        this.isLogin = !this.isLogin;

        if(this.isLogin){
            this.switchBtn.innerText = 'REGISTER';
        }else {
            this.switchBtn.innerText = 'LOGIN'
        }
        
        this.renderAuthForm()
    }

    logout(){
        this.avatar.remove();
        this.logoutBtn.remove();
        this.appContainer.innerHTML = '';
        this.isLogin = true;

        this.renderAuthForm();

    }
}
