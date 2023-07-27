function reString(str) {
    let reStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reStr += str.charAt(i);
    }
    return reStr;
  }
  
  const input = "hello world";
  const output = reString(input);
  console.log(output); 
  