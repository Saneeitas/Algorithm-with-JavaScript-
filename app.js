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

function factorial(n) {
  let result = 1;
  for (i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}

console.log("****Factorial****");
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));
//  Big-O = O(n) linear time complexity

// Prime numbers
function primeNumber(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log("*****Prime Number.****");
console.log(primeNumber(1));
console.log(primeNumber(5));
console.log(primeNumber(4));
//  Big-O = O(n) linear time complexity

// is Power of two
function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

console.log("*****is Power of Two.****");
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));
// Big-O = Olog(n)

// is Power of two BiWise
function isPowerOfTwoBitWise(n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}

console.log("*****is Power of Two BitWise.****");
console.log(isPowerOfTwoBitWise(1));
console.log(isPowerOfTwoBitWise(2));
console.log(isPowerOfTwoBitWise(5));
// Big-O = O(n)

// Recursive Fibbonacci
function recursiveFibbonacci(n) {
  if (n < 2) {
    return n;
  }
  return recursiveFibbonacci(n - 1) + recursiveFibbonacci(n - 2);
}

console.log("**Recursive Fibbonaci***");
console.log(recursiveFibbonacci(0));
console.log(recursiveFibbonacci(1));
console.log(recursiveFibbonacci(6));
// O(n) - Iterative
// O(2^n) - Recursive

// Recursive factorial
function recursiveFactorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}

console.log("**Recursive Factorial***");
console.log(recursiveFactorial(0));
console.log(recursiveFactorial(1));
console.log(recursiveFactorial(5));
// Big-O = O(n)

// Linear Search
function linearSearch(arr, t) {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === t) {
      return i;
    }
  }
  return -1;
}

console.log("***Linear Search***");
console.log(linearSearch([-5, 2, 10, 4, 6], 10));
console.log(linearSearch([-5, 2, 10, 4, 6], 6));
console.log(linearSearch([-5, 2, 10, 4, 6], 20));
// Big-O = O(n)

// Binary Search
function binarySearch(arr, t) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (t === arr[middleIndex]) {
      return middleIndex;
    }
    if (t < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}

console.log("***Binary Search***");
console.log(binarySearch([-5, 2, 4, 6, 10], 10));
console.log(binarySearch([-5, 2, 4, 6, 10], 6));
console.log(binarySearch([-5, 2, 4, 6, 10], 20));
// Big-O = O(logn)

// Recursive Binary Search
function recursiveBinarySearch(arr, t) {
  return search(arr, t, 0, arr.length - 1);
}
function search(arr, t, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (t === arr[middleIndex]) {
    return middleIndex;
  }
  if (t < arr[middleIndex]) {
    return search(arr, t, leftIndex, rightIndex - 1);
  } else {
    return search(arr, t, leftIndex + 1, rightIndex);
  }
}

console.log("***Recursive Binary Search***");
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10));
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6));
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20));
// Big-O = O(logn)

// Sorting Algorithm

// Bubble Sort
function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}
console.log("***Bubble Sort***");
const arr = [8, 20, -2, 4, -6];
bubbleSort(arr);
console.log(arr);
// Big-O = O(n^2)

// Insertion sort
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
}

console.log("***Insertion Sort***");
insertionSort(arr)
console.log(arr)
// Big-O = O(n^2)