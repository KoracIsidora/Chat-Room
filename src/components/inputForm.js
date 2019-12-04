class InputForm{
    constructor(){
        this.node = document.createElement('section');
        this.node.className = 'klasaprva';

        this.input = document.createElement('input');
        this.input.type = 'text';
        this.input.placeholder = 'Username';

        this.btn = document.createElement('button');
        this.btn.type = 'submit';
        this.btn.innerHTML = 'Set';

        this.node.appendChild(this.input);
        this.node.appendChild(this.btn);
    }

    getNode(){
        return this.node;
    }

    readUser(onClick){
        this.btn.addEventListener('click', onClick);
    }
}

export{
    InputForm
}