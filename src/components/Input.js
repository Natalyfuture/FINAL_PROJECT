export class Input {
    constructor (options){
        const{name, label, placeholder, type, onInput, onChange} = options;

        this.element = document.createElement('input');
        this.errorMessage = document.createElement('span');

        this.value = this.element.value;
        this.name = name;
        this.label = label;
        this.element.name = name;
        this.element.type = type;
        this.element.placeholder = placeholder;
        this.element.label = label;

        this.value = this.element.value;

        this.control = this.createControl(onInput, onChange);

        }

        createControl(onInput, onChange){
            const div = document.createElement('div');
            const labelInput = document.createElement('label');
            const inputId = `_${this.name}`;

            div.classList.add('input-container');
            this.errorMessage.classList.add('input-error');
            this.element.classList.add('input_name');

            this.element.id = inputId;

            labelInput.setAttribute('for', this.element.id);
            labelInput.innerText = this.label;

            div.append(labelInput, this.element, this.errorMessage);
            
            this.element.addEventListener('input', (e) =>{
                this.value = e.target.value;
                this.updateErrorMessage('');
                if(onInput){
                onInput(e);
                };
            })

            if(onChange){
                this.element.addEventListener('change', (e) =>{
                    onChange(e);
                });
            }
            
            return div
        }

        updateErrorMessage(message) {
            this.errorMessage.innerText = message;
        }
        

    render(div){
        this.control.append(this.div) 
    }
    
}





