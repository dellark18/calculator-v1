let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sumTotal = document.getElementById("sum-el")

function add() {
    addCal = num1 + num2
    sumAnswer = addCal
    sumTotal.textContent += sumAnswer
    sumTotal = 0
}

function subtract() {
    minusCal = num1 - num2
    sumAnswer = minusCal
    sumTotal.textContent += sumAnswer
    sumTotal = 0
}

function divide() {
    divCal = num1 / num2
    sumAnswer = divCal
    sumTotal.textContent += sumAnswer
    sumTotal = 0
}

function multiply() {
    mulCal = num1 * num2
    sumAnswer = mulCal
    sumTotal.textContent += sumAnswer
    sumTotal = 0
}
// Create four functions: add(), subtract(), divide(), multiply() ✅
// Call the correct function when the user clicks on one of the buttons ✅
// Perform the given calculation using num1 and num2 ✅
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"