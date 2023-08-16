/*
* Give a rectangular matrix of characters, add a border of asterisks (*) to it
* Example:
* For  =>
*           picture =["abc", "ded"]
* The output should be =>
*           addBorder(picture) = ["*****", "*abc*", "*ded*", "*****"]
*
* Hints
* concat()
* unshift()
* push()
* */

//Solution:

function addBorder(picture){
    let wall= "*".repeat(picture[0].length + 2)
    picture.unshift(wall)
    picture.push(wall)
    for(let i = 1; i < picture.length -1; i++){
        picture[i] = "*".concat(picture[i], "*")
    }
    return picture
}

console.log(addBorder(["abc", "ded"]))