export class Input {
    constructor (options){
        const{name, placeholder, type, onInput, onChange} = options;

        this.element = document.createElement('input');
        this.errorMessage = document.createElement('span');

        this.value = this.element.value;
        this.name = name;
        this.element.name = name;
        this.element.type = type;
        this.element.placeholder = placeholder;

        this.value = this.element.value;
        console.log(this.value)

        this.control = this.createControl(onInput, onChange);
        console.log(this.control)

        }

        createControl(onInput, onChange){
            const div = document.createElement('div');
            const label = document.createElement('label');
            const inputId = `_${this.name}`;

            div.classList.add('input-container');
            this.errorMessage.classList.add('input-error');
            this.element.classList.add('input_name');

            this.element.id = inputId;
            console.log(this.element.id)

            label.setAttribute('for', this.element.id);
            label.innerText = this.name;
            

           
            this.element.addEventListener('input', (e) =>{
                this.value = e.target.value;
                console.log(this.value)
                if(onInput){
                onInput(e);
                };
            })

            if(onChange){
                this.element.addEventListener('change', (e) =>{
                    onChange(e);
                });
                
            }

            div.append(label, this.element, this.errorMessage);
            console.log(div)
            return div
        }
        

    render(div){
        console.log(div)

        this.control.append(this.div)
        
    }
    
}





