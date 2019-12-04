import { getInfo, addNewMessage, getAllMessages } from "../utilities/services";
import { UserReturn } from "../components/userReturn";
import { NewUser } from "../components/newUser";
import { InputForm } from "../components/inputForm";

class Main {
    constructor() {
        this.node = document.createElement('main');

        let inputForm = new InputForm();
        this.node.appendChild(inputForm.getNode());

        let newUser = new NewUser;
        this.node.appendChild(newUser.getNode());

        let returnUser = new UserReturn();
        this.node.appendChild(returnUser.getNode());

        getInfo().then(data => {
            returnUser.loadData(data.data);
        })

        let dugme = document.createElement('button');
        dugme.type = 'submit';
        dugme.innerHTML = 'My Messages';
        dugme.className = 'mymsg';

        this.node.appendChild(dugme);

        dugme.addEventListener('click', () => {
            getAllMessages(userName).then(data => {
                let items = data.messages;
                let sta = new UserReturn();
                sta.loadData(items);
                this.node.appendChild(sta.getNode());
            })
        })

        let userName = '';

        inputForm.readUser(() => {
            let textInput = inputForm.input.value;
            userName = textInput;
            textInput = textInput.trim();
            if (textInput == '') alert('Unesite username!');
            return;
        })

        newUser.addNewUser(() => {
            let text = newUser.inputField.value;
            text = text.trim();
            if (text == '') return;

            addNewMessage(userName, text).then(data => {
                console.log(data); 
            })
        })
    }

    getNode() {
        return this.node;
    }
}

export {
    Main
}