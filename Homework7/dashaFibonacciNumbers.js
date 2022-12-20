//f(n) = fn(n - 1) + fn(n - 2)

function fib (n) {
    if (n < 2) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}

console.log(fib (10));