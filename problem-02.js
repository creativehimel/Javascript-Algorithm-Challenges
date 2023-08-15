/*
* Write a function that returns the sum of two numbers.
* Write a function that return the sum of all numbers regardless of nth of params.
* Example:
* For param1 = 1 and param2 = 2, the output should be add(param1, param2) = 3.
*/

//Solution:
function getSum(params1, params2){
    return params1 + params2
}
function getTotalSum(... params1){
    let total = 0
    params1.forEach(perElem=>{
        total += perElem
    })
    return total
}

console.log(getTotalSum(1, 2, 3, 5))