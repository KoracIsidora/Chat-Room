class NewUser{
    constructor(){
        this.node = document.createElement('section');
        this.node.className = 'klasadruga';

        this.inputField = document.createElement('input');
        this.inputField.type = 'text';
        this.inputField.placeholder = 'Add new Message';

        this.btnField = document.createElement('button');
        this.btnField.type = 'submit';
        this.btnField.innerHTML = 'Add';

        this.node.appendChild(this.inputField);
        this.node.appendChild(this.btnField);
    }

    getNode(){
        return this.node;
    }

    addNewUser(onClick){
        this.btnField.addEventListener('click', onClick);
    }
}

export{
    NewUser
}