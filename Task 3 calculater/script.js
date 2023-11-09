const display = document.getElementById("display");
let currentInput = "";
let operator = "";
let firstValue = null;

// Function to update the display
function updateDisplay() {
    display.textContent = currentInput;
}

// Add event listeners to the number and operator buttons
document.querySelectorAll(".button").forEach(button => {
    button.addEventListener("click", function () {
        const value = button.textContent;

        if (/\d/.test(value)) {
            currentInput += value;
        } else if (value === "C") {
            currentInput = "";
            firstValue = null;
            operator = "";
        } else if (value === "=") {
            if (firstValue !== null) {
                switch (operator) {
                    case "+":
                        currentInput = firstValue + parseFloat(currentInput);
                        break;
                    case "-":
                        currentInput = firstValue - parseFloat(currentInput);
                        break;
                    case "*":
                        currentInput = firstValue * parseFloat(currentInput);
                        break;
                    case "/":
                        currentInput = firstValue / parseFloat(currentInput);
                        break;
                }
                operator = "";
                firstValue = null;
            }
        } else {
            if (firstValue === null) {
                firstValue = parseFloat(currentInput);
                operator = value;
                currentInput = "";
            } else {
                operator = value;
            }
        }

        updateDisplay();
    });
});
