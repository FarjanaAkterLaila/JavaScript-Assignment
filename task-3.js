function elementFre(arr) {
    if (arr.length === 0) {
      return null; 
    }
  
    const eleMap = {};
    let maxFrequency = 0;
    let mostFrequentElement;
  
    for (const element of arr) {
      eleMap[element] = (eleMap[element] || 0) + 1;
      if (eleMap[element] > maxFrequency) {
        maxFrequency = eleMap[element];
        mostFrequentElement = element;
      }
    }
  
    return mostFrequentElement;
  }
  const numbers = [3, 5, 2, 5, 3, 3, 1, 4, 5];
console.log(elementFre(numbers)); 
