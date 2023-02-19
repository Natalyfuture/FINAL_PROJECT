import{emailInput, passwordInput, nameInput} from './Input.js';

class Form {
    constructor (options){
        const{inputs, onSubmit} = options;

        this.inputs = inputs;

        this.form = document.createElement('form')
        const register = document.createElement('h3');
        const login = document.createElement('h3');
        const submitBtn = document.createElement('button');

        submitBtn.type = 'submit';
        register.classList.add('text');
        login.classList.add('text');

        register.innerText = 'REGISTER';
        login.innerText = 'LOGIN';
        submitBtn.innerText = 'Submit';

        function getFormValue (inputs) {
            return inputs.reduce((values, input) =>{
                values[input.name] = input.value;
                return values;
            }, {}); 
        }

        this.form.addEventListener('submit', (e) =>{
            e.preventDefault();
            const formValues = getFormValue(this.inputs);
            onSubmit({formValues}, e)
        })

        
        this.inputs.forEach((input) =>{
            input.render(this.form);
            console.log(input)
        })
       this.form.render();
    }
    render(container){
        this.form.append(register, login, this.inputs,submitBtn)
        container.append(this.form)
    }
}

const formRegister = new Form({
    inputs: [emailInput, nameInput, passwordInput],
});
formRegister.render(document.body);

const formLogin = new Form({
    inputs: [emailInput, passwordInput],
    
});

formLogin.render(document.body);
console.log(formLogin)

export{formRegister,  formLogin}