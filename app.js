//Fibonacci Algorithm

function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log("****Fibonacci****");
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(7));
//  Big-O = O(n) linear

function factorial(n){
  let result = 1;
  for(i = 2; i<=n; i++){
    result = result * i;
  }
  return result;
}


console.log("****Factorial****")
console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(5))
//  Big-O = O(n) linear
