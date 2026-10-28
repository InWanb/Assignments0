/*const people = [
    { id: 1, name: 'John Doe', age: 30, zp: 421 },
    { id: 2, name: 'Jane Smith', age: 28, zp: 451 },
    { id: 3, name: 'Bob Johnson', age: 35, zp: 410 },
    { id: 4, name: 'Emily Davis', age: 25, zp: 413 },
    { id: 5, name: 'Michael Wilson', age: 40, zp: 310 },
]

const dasplayPeople = arr => {
    arr.forEach((person, index) => { //forEach це такий самий for тільки для масивів
        console.log(`INDEX -> ${index} = ID: ${person.id}, Name: ${person.name}`)
    })
}   
dasplayPeople(people)
//----------------------------------
// function displayPeople(people){}
// const displayPeople = arr => {}
//----------------------------------
const newPeople = people.filter(person => person.age > 30) //в данному коді filter фільтрує людей і деяких удаляє 
console.log(newPeople)

//const sortByZP = people.sort((a, b) => a.zp - b.zp)
const sortByZP = people.sort(function(a,b){ // тут sort вже сортує людей від найменшої зарплати до найбільшої
    return a.zp - b.zp
})
console.log(sortByZP)*/
//reduce, find, map - методи масиву

/*const person = {
    name: 'John',
    age: 30,
    displayPeople: function () {
        console.log(`Name: ${this.name}, Age ${this.age}`)
    },
}
person.displayPeople()
------------------------------------------------------------методи з this написані в двох прикладах
const person = {
    name: 'John',
    age: 30,
    displayPeople: function () {
        return `${this.name}`
    },
}
const name = person.displayPeople()*/
//----------------------------------------------------------------------------- задачі
/*let btn = document.createElement("button")
btn.textContent = "HUI"
document.body.appendChild(btn)
let div = document.querySelector(".div3")
btn.onclick = function() {
let mass1 = people.filter(num => num.age % 2 === 0)
div.textContent = ""
for(let i = 0; i < mass1.length; i++){
div.textContent += mass1[i].age
div.textContent += " "
}
}*/

/*const mass = [2, 5, 3, 9];
let result = mass[0];

for (let i = 1; i < mass.length; i++) {
    result = result * mass[i];
}

console.log(result);*/ // 270

/*result = [23,50,40,67,11,22,43]
result3 = Math.min(...result)
console.log(result3)*/

const fetchApiMockData = () => {
    return [
    {
        transactionId: "abc123",
        amount: 100.0,
        currency: "USD",
        timestamp: "2024-09-01T08:30:00Z",
        status: "completed",
    },
    {
        transactionId: "def456",
        amount: 150.0,
        currency: "EUR",
        timestamp: "2024-09-01T09:00:00Z",
        status: "pending",
    },
    {
        transactionId: "ghi789",
        amount: 200.0,
        currency: "USD",
        timestamp: "2024-09-02T12:00:00Z",
        status: "completed",
    },
    {
        transactionId: "jkl012",
        amount: 300.0,
        currency: "USD",
        timestamp: "2024-08-30T10:00:00Z",
        status: "completed",
    },
    {
        transactionId: "mno345",
        amount: 400.0,
        currency: "USD",
        timestamp: "2024-09-03T14:30:00Z",
        status: "completed",
    },
    ];
};
const data = fetchApiMockData();

let input = document.createElement("button")
input.textContent = "Input"
document.body.appendChild(input)

let GRN = document.createElement("button")
GRN.textContent = "GRN"
document.body.appendChild(GRN)
GRN.disabled = true //Кнопка не працює

let div = document.querySelector(".div3")
let div1 = document.querySelector(".div")

let transactions = []

const exchangeRates = {
    USD: 41,
    EUR: 45
};

function showTransactions(arr){
    let result = ""
    arr.forEach(transaction => {
        result += `Транзакція: ${transaction.transactionId},\n сума: ${transaction.amount}\n ${transaction.currency}\n`;
    })
    div.textContent = result;
}

input.addEventListener("click", () => {
    transactions = fetchApiMockData().sort((a, b) => b.amount - a.amount)
    showTransactions(transactions)
    GRN.disabled = false//Коли кропка інпут нажата, кнопка починає працювати
})
GRN.addEventListener("click", () => {
    transactions = transactions.map(transaction => {
        if(transaction.currency === "USD"){
            return{
                ...transaction,
                amount: transaction.amount * exchangeRates.USD,
                currency: "UAH"
            }
        }
        if(transaction.currency === "EUR"){
            return{
                ...transaction,
                amount: transaction.amount * exchangeRates.EUR,
                currency: "UAH"
            }
        }
    })
    showTransactions(transactions);
})

// 1. Дано маковий api треба реалізувати - input по якому користувач буде отримувати інформацію по кліку на кнопку, а саме
// 1.1 вивід всіх транзакцій
// 1.2 сортування від найбільшої до найменшої транзакції
// 1.3 також перевести всі суми транзакцій у гривні та показати список транзакцій