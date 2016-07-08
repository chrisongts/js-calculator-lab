
// var button = document.querySelector('button');
var basic = document.getElementById('basic-calc');
basic.addEventListener('click', basicCalc);

var trip = document.getElementById('trip-calc');
trip.addEventListener('click', tripCalc);

var bmi = document.getElementById('bmi-calc');
bmi.addEventListener('click', bmiCalc);

  function basicCalc() {

    document.getElementsByClassName('form-group')

    num1 = document.getElementById('basic-num-1').value;
    num2 = document.getElementById('basic-num-2').value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    var basicOperation = document.getElementById('basic-operation');
    var operation = basicOperation.options[basicOperation.selectedIndex].value;
    var result = 0;

    switch (operation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default: console.log("Wrong operation");
    }

    document.getElementById('basic-answer-alert').innerHTML = result;

  }

  function tripCalc() {

    document.getElementsByClassName('form-group')

    distance = document.getElementById('trip-distance').value;
    mpg = document.getElementById('trip-mpg').value;
    cost = document.getElementById('trip-cost').value;
    speed = document.getElementById('trip-speed').value;

    distance = parseInt(distance);
    mpg = parseInt(mpg);
    cost = parseInt(cost);
    speed = parseInt(speed);

    if ( speed < 60 ) {
      var tripCost = Math.round(distance / mpg * cost);
    } else tripCost = Math.round(distance / ( mpg - ( speed - mpg) * 2 ) * cost);

    document.getElementById('trip-answer-alert').innerHTML = tripCost;

  }

  function bmiCalc() {

    document.getElementsByClassName('form-group')

    mass = document.getElementById('bmi-mass').value;
    height = document.getElementById('bmi-height').value;

    mass = parseInt(mass);
    height = parseFloat(height);

    var bmiBody = Math.round(mass / (height * height));

    document.getElementById('bmi-answer-alert').innerHTML = bmiBody;


  }
//
