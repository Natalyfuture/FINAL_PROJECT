import{emailInput, passwordInput, nameInput} from './Input';

const authForm = document.getElementById('auth-form');

class Form {
    constructor (options){
        const{inputs, onSubmit, text} = options;

        this.inputs = inputs;
        this.text = text;

        this.form = document.createElement('form')
        const registerBtn = document.createElement('button');
        const submitBtn = document.createElement('button');
        const registerText = document.createElement('h3')

        this.form.classList.add('form')
        submitBtn.type = 'submit';
        submitBtn.classList.add('button');
        submitBtn.classList.add('button_submit');
        registerBtn.classList.add('button');
        registerBtn.classList.add('button_text');
        registerText.classList.add('text-registration')

        registerText.innerText = 'REGISTER';
        registerBtn.innerText = 'LOGIN';
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

       

        this.form.append();

        this.inputs.forEach((input) =>{
            console.log(input.div)
            this.form.append(input.div)
            console.log(this.form)
        })
       
        authForm.append(registerText, registerBtn, this.form, submitBtn)
       /* this.form.append(submitBtn);
       console.log(this.form) */
    }
    render(container){
        
        container.append(this.form)
        console.log(container)
    }
}

const formRegister = new Form({
    inputs: [emailInput, nameInput, passwordInput],
});
/* formRegister.render(document.body);

const formLogin = new Form({
    inputs: [emailInput, passwordInput],
    
});

formLogin.render(document.body);
console.log(formLogin)
 */
export{formRegister/* ,  formLogin */}
