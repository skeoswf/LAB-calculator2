class Calculator {
  constructor(displayOutput) {
    this.displayOutput = displayOutput;
    this.clear();
  }

  clear() {
    this.displayOutput.textContent = ''
    this.operation = null;
  }

  delete() {

  }

  appendNumber(number) {
    this.displayOutput.textContent += number;
  }

  chooseOperation(operation) {

  }

  compute() {

  }

  updateDisplay() {
    this.displayOutput;
  }
}


const numberButtons = document.querySelectorAll('[data-number]');
const operationsButton = document.querySelectorAll('[data-operation');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const clearButton = document.querySelector('[data-all-clear]')
const displayOutput = document.querySelector('[data-output-display]');

const calculator = new Calculator(displayOutput)

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})
