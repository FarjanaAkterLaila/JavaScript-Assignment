function findSecond(arr) {
    if (arr.length < 2) {
      return "Array should have at least two elements.";
    }
  
    let min1 = Infinity;
    let min2 = Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min1) {
        min2 = min1;
        min1 = arr[i];
      } else if (arr[i] < min2 && arr[i] !== min1) {
        min2 = arr[i];
      }
    }
  
    if (min2 === Infinity) {
      return "There is no second smallest element in the array.";
    }
  
    return min2;
  }
  

  const numbers = [8,0,55,6,1,7,2];
  console.log(findSecond(numbers)); 
  