
export class Form {
    constructor (options){
        
        const{inputs, onSubmit, changeBtnText, title} = options;

        this.inputs = inputs;
        this.title = title;
        this.changeBtnText = changeBtnText;
        
        this.form = document.createElement('form');
        this.createForm(options)
        
    }

    static getFormValue (inputs) {
        return inputs.reduce((values, input) =>{
            values[input.name] = input.value;
            console.log(input.value)
            return values;
        }, {}); 
    }

        createForm({onSubmit, registerText, title}){
            const submitBtn = document.createElement('button');
            registerText = document.createElement('h3');

            this.form.classList.add('form');
            submitBtn.type = 'submit';
            submitBtn.classList.add('button', 'button_submit');
            registerText.classList.add('button', 'button_text');
    
            registerText.innerText = title;
            submitBtn.innerText = 'Submit';
            this.form.append(registerText);
            console.log(this.inputs);

                this.form.addEventListener('submit', async (e) =>{
                    e.preventDefault();
                const formValues = Form.getFormValue(this.inputs);
                    console.log(formValues)
                    submitBtn.setAttribute('disabled', '');
                    try {
                        await onSubmit(this.formValues, e)
                    } catch (err) {
                        console.log(err)
                    }
                    submitBtn.removeAttribute('disabled');
                    
                })

                this.inputs.forEach((input) =>{
                    console.log(input.control)
                    this.form.append(input.control)
                    console.log(this.form)
                })
                console.log(this.form)
                this.form.append(submitBtn);
                console.log(this.form)
        }
        render(container) {
            container.append(this.form)
            console.log(container)
            return container
        }
        
    }

   
   



