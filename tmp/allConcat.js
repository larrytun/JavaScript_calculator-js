var Calculator = require('./../js/operators.js').calculatorModule;

$(document).ready(function() {
  $('#addition-form').submit(function() {
    event.preventDefault();
    var calculator = new Calculator("blue");
    var numberOne = parseInt($("#numberOne").val());
    var numberTwo = parseInt($("#numberTwo").val());
    var sum = calculator.add(numberOne, numberTwo);
    $("#output").text(sum);
  });
});

var Calculator = require('./../js/operators.js').calculatorModule;

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});
