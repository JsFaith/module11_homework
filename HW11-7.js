function funcTime(minNumber, maxNumber) {
  const intervalId = setInterval(function() {
    console.log(minNumber);
    if (minNumber == maxNumber) {
      clearInterval(intervalId);
    }
    minNumber++;
  }, 1000);
}

funcTime(3, 7);