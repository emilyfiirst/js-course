const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserInput(){
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBefore, calcNumber){
    const calcDescription = `${resultBefore} ${operator} ${calcNumber}`
    outputResult(currentResult, calcDescription); //from vendor file
}

function writeToLog(operationIdentifier, prevResul, operationNumber, newResult){
    const logEntry = {
        operation: operationIdentifier,
        prevResul: prevResul,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function add(){
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult += enteredNumber; 
    createAndWriteOutput('+', initialResult, enteredNumber);
    writeToLog('ADD', initialResult, enteredNumber, currentResult);
}

function subtract(){
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber; 
    createAndWriteOutput('-', initialResult, enteredNumber);
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multiply(){
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide(){
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber; 
    createAndWriteOutput('/', initialResult, enteredNumber);
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);