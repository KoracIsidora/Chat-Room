class Header {
    constructor(){
        this.node = document.createElement('header');

        this.naslov = document.createElement('h1');
        this.naslov.textContent = 'Coetus Chat Room';

        this.node.appendChild(this.naslov);
    }

    getNode(){
        return this.node;
    }
}

export{
    Header
}