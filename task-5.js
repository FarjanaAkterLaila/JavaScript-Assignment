function calculator(num1, operator, num2) {
  if (operator === '+') {
    return num1 + num2;
  } else if (operator === '-') {
    return num1 - num2;
  } else if (operator === '*') {
    return num1 * num2;
  } else if (operator === '/') {
    if (num2 === 0) {
      return "Error: Cannot divide by zero!";
    }
    return num1 / num2;
  } else {
    return "Error: Invalid operator!";
  }
}
console.log(calculator(105, '+', 70)); 
console.log(calculator(170, '-', 50)); 

