const authForm = document.getElementById('auth-form');

export class Form {
    constructor (options){
        const{inputs, onSubmit, changeBtnText, title} = options;

        this.inputs = inputs;
        this.title = title;
        this.changeBtnText = changeBtnText;
        

        this.form = document.createElement('form')
        const registerBtn = document.createElement('button');
        const submitBtn = document.createElement('button');
        const registerText = document.createElement('h3')

        this.form.classList.add('form')
        submitBtn.type = 'submit';
        submitBtn.classList.add('button', 'button_submit');
        registerBtn.classList.add('button', 'button_text');
        registerText.classList.add('text-registration');

        registerText.innerText = title;
        registerBtn.innerText = changeBtnText;
        submitBtn.innerText = 'Submit';

        function getFormValue (inputs) {
            return inputs.reduce((values, input) =>{
                values[input.name] = input.value;
                console.log(input.name)
                console.log(input.value)
                return values;
            }, {}); 
        }

        this.form.addEventListener('submit', async (e) =>{
            e.preventDefault();
            const formValues = getFormValue(this.inputs);
            console.log(formValues)
            submitBtn.setAttribute('disabled', '');
            await onSubmit(this.formValues, e)
            submitBtn.removeAttribute('disabled');
            onSubmit({formValues}, e)
        })

        this.form.append(registerText, registerBtn);

        this.inputs.forEach((input) =>{
            console.log(input.control)
            this.form.append(input.control)
            console.log(this.form)
        })

        this.form.append(submitBtn);
       
    }

    render(container) {
        container.append(this.form)
    }
   
}


