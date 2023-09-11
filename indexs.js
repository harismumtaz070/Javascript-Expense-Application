let balanceElement = document.getElementById('balance');
let incomeElement = document.getElementById('plus');
let expenseElement = document.getElementById('minus');
let descriptionInput = document.getElementById('Description');
let amountInput = document.querySelector('amount');
let incomeButton = document.querySelector('btn1');
let expenseButton = document.querySelector('btn2')

let balance = 0;
let income = 0;
let expense = 0;

//   Function to update the display:

function updatetext(){
    balanceElement.textContent = 'Rs' + balance.toFixed(2)
    incomeElement.textContent = 'Rs' + income.toFixed(2)
    expenseElement.textContent = 'Rs' + expense.toFixed(2)
    let profitLoss = income - expense
    let prftlsstxt = profitLoss >= 0
}