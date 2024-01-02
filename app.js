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
//  Big-O = O(n) linear time complexity

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
//  Big-O = O(n) linear time complexity


// Prime numbers
function primeNumber(n){
  if(n < 2){
    return false
  }
  for(let i = 2; i <= Math.sqrt(n); i++){
    if(n % i === 0){
      return false
    }
  }
  return true
}
console.log("Prime Number.")
console.log(primeNumber(1))
console.log(primeNumber(5))
console.log(primeNumber(4))
//  Big-O = O(n) linear time complexity