/**
 * CALCULADORA BÁSICA
 * 
 * 
 * TODO:
 * 
 * Multiplicación, división, usar todos los números
 * 
 * Botón "C", que deje blanca nuestra pantalla (tiene el id="reset")
 */


// Variables

var numberOne;
var numberTwo;
var operation;

// Números 0 - 9, operador Igual "="

var zero = document.getElementById("zero");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eigth = document.getElementById("eight");
var nine = document.getElementById("nine");

// Operadores Suma, Resta, multiplicación, División

var addition = document.getElementById("addition");
var subtraction = document.getElementById("subtraction");
var division = document.getElementById("division");
var multiplication = document.getElementById("multiplication");
var substraction = document.getElementById("subtraction");
var reset = document.getElementById("reset");
var equal = document.getElementById("equal")
// Función que calcula el resultado

function currentResult(){
  var res = 0;
  switch(operation){
    case "+":
      res = parseInt(numberOne) + parseInt(numberTwo);
      break;
      case "-": 
        res = parseInt(numberOne) - parseInt(numberTwo);
        break;
      default:
        res = 0;
        break;
        case "*":
          res = parseInt(numberOne) * parseInt(numberTwo);
          break;
          case "/":
            res = parseInt(numberOne) / parseInt(numberTwo);
            break;
  }

  result.innerText = res;
}

// Escuchadores

one.addEventListener("click", function(){
  result.textContent = result.textContent + "1";
})
two.addEventListener("click", function(){
  result.textContent = result.textContent + "2";
})
three.addEventListener("click", function(){
  result.textContent = result.textContent + "3";
})
four.addEventListener("click", function(){
  result.textContent = result.textContent + "4";
})
five.addEventListener("click", function(){
  result.textContent = result.textContent + "5";
})
six.addEventListener("click", function(){
  result.textContent = result.textContent + "6";
})
seven.addEventListener("click", function(){
  result.textContent = result.textContent + "7";
})
eigth.addEventListener("click", function(){
  result.textContent = result.textContent + "8";
})
nine.addEventListener("click", function(){
  result.textContent = result.textContent + "9";
})
zero.addEventListener("click", function(){
  result.textContent = result.textContent + "0"
})
//operaciones
addition.addEventListener("click", function(){
  numberOne = result.textContent;
  operation = "+";
  result.textContent = "";
})
subtraction.addEventListener("click", function(){
  numberOne = result.textContent;
  operation = "-";
  result.textContent = "";
})
equal.addEventListener("click", function(){
  numberTwo = result.textContent;
  currentResult();
})
multiplication.addEventListener("click", function(){
  numberOne = result.textContent;
  operation = "*"
  result.textContent = "";
})
division.addEventListener("click", function(){
  numberOne = result.textContent;
  operation = "/"
  result.textContent = "";
})
reset.addEventListener("click", function(){
  numberOne = result.textContent = "";
})