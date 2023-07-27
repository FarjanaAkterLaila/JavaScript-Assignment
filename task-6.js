function password(length) {
    const upLe = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const loLe = "abcdefghijklmnopqrstuvwxyz";
    const num = "0123456789";
    const spCh = "!@#$%^&*()-_=+[]{}|;:,.<>?";
  
    const all = upLe + loLe + num + spCh;
    const allLength = all.length;
  
    let pass = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.round(Math.random() * (allLength - 1));
      pass += all[randomIndex];
    }
  
    return pass;
  }
  

  const passwordLength = 8;
  const randomPassword = password(passwordLength);
  console.log(randomPassword);
  