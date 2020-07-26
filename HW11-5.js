// 11.5

let a = Number(prompt("Введите число a"))
let b = Number(prompt("Введите число b"))

function getSumFunction(a) {
  return function(b) {
  	return a+b
  }
};

const sumFunction = getSumFunction(a);

console.log("Сумма введенных чисел равна " + sumFunction(b));