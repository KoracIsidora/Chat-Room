let url = "https://coetus.herokuapp.com";

function getInfo(){
    return fetch(`${url}/api/message`)
    .then(response=>response.json(),
    error=>console.log(error));
}

function addNewMessage(username, message){
    let res = fetch(`${url}/api/message`,{
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'PUT',
        body: JSON.stringify({
            username: username,
            message: message
        }) 
    }).then(response=>response.json(),
    error=>console.log(error));

    return res;
}


function getAllMessages(username, message){
    let res = fetch(`${url}/api/message`,{
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'POST',
        body: JSON.stringify({
            username: username,
            message: message
        }) 
    }).then(response=>response.json(),
    error=>console.log(error));

    return res;
}

export{
    getInfo,
    addNewMessage,
    getAllMessages
}