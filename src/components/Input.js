class Input {
    constructor (options){
        const{name, type} = options;

        this.element = document.createElement('input');
        this.element.classList.add('input_name')
        this.name = name;
        this.value = this.element.value;
        this.element.name = name;
        this.element.type = type;
        
        this.div  = this.render()
        
    }
    render(){
        const div = document.createElement('div');
        const label = document.createElement('label');
        div.classList.add('input-container');
        label.classList.add('input_label');
        label.innerText = this.name;
        console.log(label)
        console.log(this.element)
        div.append(label, this.element);
        console.log(div)
        return div
        
    }
    
}


const emailInput = new Input({
    name: 'Email', 
    type: 'email',
})

console.log(emailInput.div)



const passwordInput = new Input({
        name: 'Password', 
        type: 'password',
})

console.log(passwordInput.div)


const nameInput = new Input({
       name: 'Name', 
       type: 'text',   
})

console.log(nameInput.div)


export{
    emailInput, passwordInput, nameInput
}