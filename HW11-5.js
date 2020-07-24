// 11.5
// это не решение задачи! это воспроизведение примера из видеокаста. 
// Саму задачу я так и не смог понять как писать.
// прошу написать здесь верный код для самостоятельного разбора.
// Спасибо.

function firstDigit(internalFunction) {
  internalFunction();
  
  return function () {
    console.log ("test")
  }
}

function secondDigit() {
  console.log ("1234")
}

const resultFunc = firstDigit(secondDigit);

resultFunc();