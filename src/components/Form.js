import{emailInput, passwordInput, nameInput} from './Input';
console.log(emailInput.div)

class Form {
    constructor (options){
        const{inputs, onSubmit} = options;

        this.inputs = inputs;
        console.log(this.inputs)

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

        this.form.append(register, login);

        this.inputs.forEach((input) =>{
            console.log(input.div)
            this.form.append(input.div)
            console.log(this.form)
        })
       
       this.form.append(submitBtn);
       console.log(this.form)
    }
    render(container){
        
        container.append(this.form)
        console.log(container)
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
