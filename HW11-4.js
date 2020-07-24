// 11.4

let j = 2;

function isItPrime (x) {
  
for (i = 2; i <= x; i++) {
  if ((x > 1000) || (isNaN(x) === true)) {
    j = 2;
    break;
  }
  else if ((i * i <= x) && (x % i === 0)) {
    j = 1;
    break;
  }
  else j = 0;
}

// if (j === 0) {
//   alert ("Простое число")
// }
// if (j === 1) {
//   alert ("Составное число")
// }
// if (j === 2) {
//   alert ("Введено недопустимое значение")
// }
  
  switch(j) {
    case 0:
      alert ("Простое число");
      break;
    case 1:
      alert ("Составное число");
      break;
    case 2:
      alert ("Введено недопустимое значение");
      break;
  }
  return;
}

isItPrime(prompt("Введите число от 0 до 1000"));