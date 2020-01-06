const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

// function calculateResult(calculationType) {
//     const enteredNumber = getUserInput();
//   if (
//     calculationType !== "ADD" &&
//     calculationType !== "SUBTRACT" &&
//     calculationType !== "MULTIPLY" &&
//     calculationType !== "DIVIDE" ||
//     !enteredNumber
//   ) {
//     return;
//   }
//     const enteredNumber = getUserInput();
//     const initialResult = currentResult;
//     let mathOperator;
//     if (calculationType === "add") {
//       currentResult += enteredNumber;
//       mathOperator = "+";
//     } else if (calculationType === "SUBTRACT") {
//       currentResult -= enteredNumber;
//       mathOperator = "-";
//     } else if (calculationType === "MULTIPLY") {
//       currentResult *= enteredNumber;
//       mathOperator = "*";
//     } else if (calculationType === "DIVIDE") {
//       currentResult /= enteredNumber;
//       mathOperator = "/";
//     }
//     createAndWriteOutput(mathOperator, initialResult, enteredNumber);
//     writeToLog(initialResult, enteredNumber, currentResult);
//   }



// function add() {
//   calculateResult("ADD");
// }

// function subtract() {
//   calculateResult("SUBTRACT");
// }

// function multiply() {
//   calculateResult("MULTIPLY");
// }

// function divide() {
//   calculateResult("DIVIDE");
// }

function calculate(operation) {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  let operator;
  if (operation === 'ADD') {
    currentResult += enteredNumber;
    operator = '+';
  } else if (operation === 'SUBTRACT') {
    currentResult -= enteredNumber;
    operator = '-';
  } else if (operation === 'MULTIPLY') {
    currentResult *= enteredNumber;
    operator = '*';
  } else {
    currentResult /= enteredNumber;
    operator = '/';
  }
  createAndWriteOutput(operator, initialResult, enteredNumber);
  writeToLog(operation, initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", calculate.bind(this, 'ADD'));
subtractBtn.addEventListener("click", calculate.bind(this, 'SUBTRACT'));
multiplyBtn.addEventListener("click", calculate.bind(this, 'MULTIPLY'));
divideBtn.addEventListener("click", calculate.bind(this, 'DIVIDE'));
