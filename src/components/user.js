class User{
    constructor(data){
        this.data = data;

        this.node = document.createElement('section');
        this.node.className = 'user';

        this.txtMessage = document.createElement('p');
        this.txtMessage.textContent = data.message + " ";

        this.a = new Date(data.timestamp);
        this.txtDate = document.createElement('p');
        this.txtDate.textContent = this.a;
        this.txtDate.innerHTML = `${this.a.getHours()}:${this.a.getMinutes()}:${this.a.getSeconds()}` + " ";
        
        this.user = document.createElement('label');
        this.user.textContent = data.username + " ";

        this.node.appendChild(this.user);
        this.node.appendChild(this.txtMessage);
        this.node.appendChild(this.txtDate);
    }

    getNode(){
        return this.node;
    }
}

export{
    User
}