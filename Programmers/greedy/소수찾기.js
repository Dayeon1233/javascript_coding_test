function isPrime(number) {
  if (number == 1) return false;
  for (let i = 2; i * i < number; i++) {
    if (number % i === 0) return false;
  }
  return true;
}

// console.log(solution([1, 2, 3, 4, 5]));
//   console.log(solution([1, 3, 2, 4, 2]));
console.log(isPrime(5));
