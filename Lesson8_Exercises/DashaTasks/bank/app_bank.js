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
        console.log(person)
    } else {
        console.log('You can try later!')
        logOut();
    }
}
function logOut () {
    bankAccount = false;
}
const actionFunctions = {
    withdraw: withdrawCash,
    deposit: depositCash,
    //transfer: transferMoney,
    //statement: haveAstatement,
    takeLoan: getLoan,
    stop: logOut,
} 
function withdrawCash (clientMoney, sum) {
    for (const client of configBank.clients) {
        client.money = clientMoney - sum;
    }
    return client.money;
}

function depositCash (clientMoney, sum) {
    for (const client of configBank.clients) {
        client.money = clientMoney + sum;
    }
    return client.money;
}
function getLoan () {
    const kindOFloans = ['mortgage', 'car', 'consumer',]
    console.log('What kind of loan?: ' + kindOFloans);
    let takeAloan = prompt(': ');
    const [kindOFloan, loan, years, interest] = takeAloan.split(' ');
    interestCalcul(loan, years, interest);
    if (kindOFloan.includes(kindOFloans)) {
        for (const client of configBank.clients) {
            client.loans.push(kindOFloan);
            client.debt = roundedLoan;
        }
    }
}
function interestCalcul (loan, years, interest) {
    var decimals = 2;
    var rounder = 10 ** decimals;
    var calc = loan * (1 + interest / 100);
    var roundedLoan = Math.round(calc * rounder) / rounder;
    if (years === 1) {
        return roundedLoan;
    }
    return interestCalcul (roundedLoan, years-1, interest);
}



function selectTransaction () {
    
    console.log(actionFunctions)
    let inputYourAction = prompt(': ')
    const [action, money] = inputYourAction.split(' ');
    actionFunctions[action](money);
    return inputYourAction;
}


while (bankAccount) {
    let inAccount = inputLogin();
    selectTransaction();
}
console.log(interestCalcul(3000, 5, 2));