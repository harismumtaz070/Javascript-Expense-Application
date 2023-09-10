<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Expense Tracker</title>
    <link rel="stylesheet" href="styles.css"> <!-- You can link your CSS file here if needed -->
</head>
<body>
    <div class="container">
        <h1>Expense Tracker</h1>
        <div class="balance">
            <h2>Your Balance:</h2>
            <h3 id="balance">Rs 0.00</h3>
        </div>
        <div class="income-expense">
            <div class="plus">
                <h4>Income</h4>
                <p id="plus">Rs 0.00</p>
            </div>
            <div class="minus">
                <h4>Expense</h4>
                <p id="minus">Rs 0.00</p>
            </div>
        </div>
        <div class="profit-loss">
            <h4>Profit/Loss</h4>
            <p id="loss">Rs 0.00 Profit</p>
        </div>
        <h3>Add New Transaction</h3>
        <form>
            <div class="form-control">
                <label for="Description">Description</label>
                <input type="text" id="Description" placeholder="Description">
            </div>
            <div class="form-control">
                <label for="amount">Amount</label>
                <input type="number" class="amount" placeholder="Enter amount">
            </div>
            <div class="buttons">
                <button type="button" class="btn1">Add Income</button>
                <button type="button" class="btn2">Add Expense</button>
            </div>
        </form>
    </div>
    <script src="script.js"></script> <!-- Make sure to reference your JavaScript file here -->
</body>
</html>