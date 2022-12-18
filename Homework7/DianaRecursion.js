function fibonacci (n) {
    if (result <= 0) {
      return 0;
    }

    var result = fibonacci(2 * n - 3);
    return result;
  }

  console.log(fibonacci (1));