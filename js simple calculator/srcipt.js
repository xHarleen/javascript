class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    clear(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    appendNumber(number){
        if(number === '.' && this.currentOperand.toString().includes('.')) return;
        this.currentOperand = this.currentOperand + number.toString();
    }

    changeSign(){
        if(this.currentOperand.toString().includes('-')) this.currentOperand = this.currentOperand.toString().slice(1);
        else this.currentOperand = '-' + this.currentOperand;
    }

    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0,-1);
    }

    chooseOperation(operation){
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute(){
        let result;
        let prev = parseFloat(this.previousOperand);
        let curr = parseFloat(this.currentOperand);

        switch(this.operation){
            case('+'): result = (prev + curr);
            break;
            case('-'): result = (prev - curr);
            break;
            case('*'): result = (prev * curr);
            break;
            case('÷'): 
            if(curr!=0) result = (prev / curr)
            else result = 0;
            break;
        }
        this.operation = '';
        this.previousOperand = '';
        this.currentOperand = result;       
    }

    updateDisplay(){
        if(this.operation != null){
            previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`;
            currentOperandTextElement.innerText = this.currentOperand;
        }
        else currentOperandTextElement.innerText = this.currentOperand;
    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]');
const clearButton = document.querySelector('[data-clear]');
const changeSignButton = document.querySelector('[change-sign]');
const deleteButton = document.querySelector('[data-delete]');
const previousOperandTextElement = document.querySelector('.upperdisplay');
const currentOperandTextElement = document.querySelector('.lowerdisplay');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

equalsButton.addEventListener('click', () => {
    calculator.compute();
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

changeSignButton.addEventListener('click', () => {
    calculator.changeSign();
    calculator.updateDisplay();
})