var Calculator = require('./../js/operators.js').calculatorModule;

$(document).ready(function() {
  $('#math-form').submit(function() {
    event.preventDefault();
    var calculator = new Calculator("blue");
    var numberOne = parseInt($("#numberOne").val());
    var numberTwo = parseInt($("#numberTwo").val());
    var sum = calculator.add(numberOne, numberTwo);
    $("#output").text(sum);
  });
});
