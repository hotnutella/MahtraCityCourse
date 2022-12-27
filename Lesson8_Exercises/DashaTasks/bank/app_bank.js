import PromptSync from "prompt-sync";
import configBank from "./configBank.js";
const prompt = PromptSync();

let bankAccount = true;

function inputLogin () {
    let login = prompt ('Input your name, please: ');
    const personID = idSearch(login);
    let askPassword = prompt ('Your password: ');
    passwordCheck(personID, askPassword);
}
function idSearch (login) {
    for (const client of configBank.clients) {
        const clientName = client.name;
        if (clientName === login) {
            const clientID = client.id;
            return clientID;
        }
    }
}
function passwordCheck (personID, clientPassword) {
    const person = configBank.clients.filter(function (client) {
        return clientPassword === client.password;
    })
    if (personID && clientPassword) {
        return person;
    } else {
        console.log('You can try later!')
        logOut();
    }
}
function logOut () {
    bankAccount = false;
}

while (bankAccount) {
    inputLogin();

}
