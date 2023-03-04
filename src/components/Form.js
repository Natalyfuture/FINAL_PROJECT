
export class Form {
    constructor (options){
        
        const{inputs, changeBtnText, title} = options;

        this.inputs = inputs;
        this.title = title;
        this.changeBtnText = changeBtnText;
        
        this.form = document.createElement('form');
        this.createForm(options)
        
    }

    static getFormValue (inputs) {
        return inputs.reduce((values, input) =>{
            values[input.name] = input.value;

            return values;
        }, {}); 
    }

        createForm({onSubmit, registerText, submitBtnText, title}){
            this.submitBtn = document.createElement('button');
            registerText = document.createElement('h3');
            this.submitBtnText = submitBtnText;

            this.form.classList.add('form');
            this.submitBtn.type = 'submit';
            this.submitBtn.classList.add('button', 'button_submit');
            registerText.classList.add('button', 'button_text');
    
            registerText.innerText = title;
            this.submitBtn.innerText = submitBtnText;
            this.form.append(registerText);

            this.form.addEventListener('submit', async (e) =>{
                e.preventDefault();

                const formValues = Form.getFormValue(this.inputs);
                
                this.submitBtn.setAttribute('disabled', '');
                try {
                    await onSubmit(formValues, e)
                } catch (err) {
                    console.log(err)
                }
                this.submitBtn.removeAttribute('disabled');
                    
            })

            this.inputs.forEach((input) =>{
                this.form.append(input.control)
            })
            
            this.form.append(this.submitBtn);
            
        }
        render(container) {
            container.append(this.form);

            return container
        }
        
    }

   
   



