import { User } from "./user";

class UserReturn {
    constructor() {
        this.node = document.createElement('section');
        this.node.className = 'nesto';
    }

    loadData(data) {
        console.log(data);
        this.node.innerHTML = '';
        let nesto = data;
        nesto.forEach(element => {
            let user = new User(element);
            this.node.appendChild(user.getNode());
        })
    }

    getNode() {
        return this.node;
    }
}

export {
    UserReturn
}