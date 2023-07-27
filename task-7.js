function romanToInteger(romanNumeral) {
    const romanNum = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
  
    let integerResult = 0;
    let prevValue = 0;
  
    for (let i = romanNumeral.length - 1; i >= 0; i--) {
      const currentRomanChar = romanNumeral[i];
      const currentValue = romanNum[currentRomanChar];
  
      if (currentValue < prevValue) {
        integerResult -= currentValue;
      } else {
        integerResult += currentValue;
      }
  
      prevValue = currentValue;
    }
  
    return integerResult;
  }
  

  console.log(romanToInteger("IX"));  
  