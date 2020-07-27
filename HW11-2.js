// 11.2

arr = [1,2,3,4,-2,6,0,"hello"];
odd = 0;
even = 0;
zero = 0;
other = 0;

function getCalc() {
  for (let i=0; i<arr.length; i++) {
    if (typeof arr[i] !== "number" || isNaN(arr[i])) {
      other = other + 1;
    }
    else if (arr[i] === 0) {
      zero = zero + 1;
    }
    else if (arr[i] % 2 == 0) {
      even = even + 1;
    }
    else {odd = odd + 1;}
  }
}

getCalc()

console.log(odd, even, zero, other)

// Есть неточность: неверно учитываются нечисловые значения (other). Чтобы они считались верно, нужно добавить к условию кроме проверки на NaN ещё и проверку с помощью typeof. Выше исправила