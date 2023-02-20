class Input {
    constructor (options){
        const{name, type} = options;

        this.element = document.createElement('input');
        this.name = name;
        this.value = this.element.value;
        this.element.name = name;
        this.element.type = type;
        return this.render()
        
    }
    render(){
        const div = document.createElement('div');
        const label = document.createElement('label');
        div.classList.add('input-container');
        label.classList.add('label');
        label.innerText = this.name;
        console.log(label)
        console.log(this.element)
        return div.append(label, this.element);
        
    }
    
}


const emailInput = new Input({
    name: 'Email',
    type: 'email',
})



const passwordInput = new Input({
    name: 'Password',
    type: 'password',
})

const nameInput = new Input({
    name: 'Name',
    type: 'text',
})

export{
    emailInput, passwordInput, nameInput
}