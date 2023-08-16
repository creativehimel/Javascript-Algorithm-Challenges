/*
* Sum all the prime numbers up to and including the provided number
* A prime number is defined as a number greater than one and having only two divisors, one itself.
* For example, 2 is a prime number because it's only divisible by one and two
* Example:
* getSumAllPrimeNumbers(10) should return 17
* getSumAllPrimeNumbers(977) should return 73156
* Hints:
* push()
* reduce()
* */

//Solution:

function getSumAllPrimeNumbers(number){
    let primeTotal = 0
    for (let i = 2; i < number; i++) {
        for (let j = 2; j < number; j++){
            if (i === j){
                primeTotal += i
            }
            if (i % j === 0){
                break
            }
        }
    }
    return primeTotal
}

console.log(getSumAllPrimeNumbers(25))
console.log(getSumAllPrimeNumbers(2))