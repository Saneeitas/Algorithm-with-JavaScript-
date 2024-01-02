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
console.log("*****Prime Number.****")
console.log(primeNumber(1))
console.log(primeNumber(5))
console.log(primeNumber(4))
//  Big-O = O(n) linear time complexity


// is Power of two
function isPowerOfTwo(n){
  if(n < 1){
    return false
  }
  while(n > 1){
    if(n % 2 !== 0){
      return false
    }
    n= n / 2
  }
  return true
}

console.log("*****is Power of Two.****");
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));
// Big-O = Olog(n)

// is Power of two BiWise
function isPowerOfTwoBitWise(n){
  if(n < 1){
    return false
  }
  return  (n & (n-1)) === 0
}

console.log("*****is Power of Two BitWise.****");
console.log(isPowerOfTwoBitWise(1));
console.log(isPowerOfTwoBitWise(2));
console.log(isPowerOfTwoBitWise(5));
// Big-O = O(n)


// Recursive Fibbonacci
function recursiveFibbonacci(n){
  if(n < 2){
    return n
  }
  return recursiveFibbonacci(n-1) + recursiveFibbonacci(n-2);
}

console.log("**Recursive Fibbonaci***")
console.log(recursiveFibbonacci(0))
console.log(recursiveFibbonacci(1))
console.log(recursiveFibbonacci(6))
// O(n) - Iterative
// O(2^n) - Recursive