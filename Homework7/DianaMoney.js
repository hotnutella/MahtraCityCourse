function calculator (money, years, procent) {
    if ( years === 0 ) {
      return money;
    }

    return calculator (money/years * (procent * 0.01) + money,  (years - 1), procent);
  }
  
  console.log(calculator(1000, 5, 15))