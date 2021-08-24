// memoization
// js objects, keys will be arg to fn, value will be return value
// Time Complexity: O(n)
// Space Conplexity: O(n)
const fib = (n, memo = {}) => {
  if(n in memo) return memo[n];
  if(n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo );
  return memo[n];
}


// Traditional way
// Time Complexity: O(2^n)
// Space Conplexity: O(n)
// const fib = (n) => {
//   if(n <= 2) return 1;
//   return fib(n - 1) + fib(n - 2);
// }

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(50));
