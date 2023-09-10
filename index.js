// Get DOM elements
const balanceElement = document.getElementById("balance");
const incomeElement = document.getElementById("plus");
const expenseElement = document.getElementById("minus");
const descriptionInput = document.getElementById("Description");
const amountInput = document.querySelector(".amount");
const incomeButton = document.querySelector(".btn1");
const expenseButton = document.querySelector(".btn2");

let balance = 0;
let income = 0;
let expense = 0;

// Function to update the display
function updateDisplay() {
    balanceElement.textContent = "Rs" + balance.toFixed(2);
    incomeElement.textContent = "Rs" + income.toFixed(2);
    expenseElement.textContent = "Rs" + expense.toFixed(2);
    const profitLoss = income - expense;
    const profitLossText = profitLoss >= 0 ? "Profit" : "Loss";
    document.getElementById("loss").textContent = "Rs" + Math.abs(profitLoss).toFixed(2) + " " + profitLossText;
}

// Function to handle income button click
incomeButton.addEventListener("click", function () {
    const amount = parseFloat(amountInput.value);
    if (!isNaN(amount) && amount > 0) {
        income += amount;
        balance += amount;
        updateDisplay();
        descriptionInput.value = "";
        amountInput.value = "";
    }
});

// Function to handle expense button click
expenseButton.addEventListener("click", function () {
    const amount = parseFloat(amountInput.value);
    if (!isNaN(amount) && amount > 0) {
        expense += amount;
        balance -= amount;
        updateDisplay();
        descriptionInput.value = "";
        amountInput.value = "";
    }
});
