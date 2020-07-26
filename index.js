var firstNumber = "";
var secondNumber = "";
var operation = null;

var operations = {
  sum: function (x, y) {
    return Number(x) + Number(y);
  },
  minus: function (x, y) {
    return Number(x) - Number(y);
  },
  multiply: function (x, y) {
    return Number(x) * Number(y);
  },
  divide: function (x, y) {
    return Number(x) / Number(y);
  },
};

function buttonClick(evt) {
  var value = evt.target.textContent;
  if (!operation) {
    firstNumber += value;
    return showResult(firstNumber);
  }

  secondNumber += value;
  return showResult(secondNumber);
}

function registerOperation(oper) {
  if (firstNumber) {
    showResult("");
    operation = operations[oper];
  }
}

function doOperation() {
  if (operation) {
    var result = operation(firstNumber, secondNumber);
    showResult(result);
    return cleanAll();
  }
}

function showResult(number) {
  var display = document.querySelector("#display");
  display.value = number;
}

function cleanAll() {
  firstNumber = "";
  secondNumber = "";
  operation = null;
}
