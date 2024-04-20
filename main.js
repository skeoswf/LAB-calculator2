class Calculator {
  constructor(displayOutput) {
    this.displayOutput = displayOutput;
    this.clear();
  }

  clear() {
    this.displayOutput.textContent = '';
    this.operation = null;
    this.previousOperand = '';
  }

  delete() {
    const currentDisplay = this.displayOutput.textContent;
    this.displayOutput.textContent = currentDisplay.slice(0, -1)
  }

  appendNumber(number) {
    this.displayOutput.textContent += number.toString();
  }

  chooseOperation(operation) {
    if (this.displayOutput.textContent === '') return;
    if (this.previousOperand !== '') {
      this.compute()
    }
    this.operation = operation;
    this.previousOperand = this.displayOutput.textContent;
    this.displayOutput.textContent = '';
  }

  compute() {
    let computation;
    const current = parseFloat(this.displayOutput.textContent)
    const previous = parseFloat(this.previousOperand)
    if (isNaN(current) || isNaN(previous)) return

    switch (this.operation) {
      case '+': 
        computation = previous + current;
        break;
    case '-': 
        computation = previous - current;
        break;
    case 'x': 
        computation = previous * current;
        break;
    case '/': 
        computation = previous / current;
        break;
        default: 
        return;
    }

this.displayOutput.textContent = computation;
this.operation = null;
this.previousOperand = ''
  }


  updateDisplay() {
    this.displayOutput;
  }
}


const numberButtons = document.querySelectorAll('[data-number]');
const operationsButton = document.querySelectorAll('[data-operation]');
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

operationsButton.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})

equalsButton.addEventListener('click', () => {
  calculator.compute()
  calculator.updateDisplay();
})

clearButton.addEventListener('click', () => {
  calculator.clear();
  calculator.updateDisplay();
})

deleteButton.addEventListener('click', () => {
  calculator.delete();
  calculator.updateDisplay();
})
