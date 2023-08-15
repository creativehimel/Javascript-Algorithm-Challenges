/*
* Give an array of integers, replace all the occurrences of elementReplce with subtractionElem.
* Example: 
* For inputArray = [1, 2, 1] , elementToReplace = 1, subtractionElement = 3, the output should be 
  arrayReplace(inputArray, elementToReplace, subtractionElement) = [3, 2, 3]

*/

// Solution

function arrayReplace(inputArray, elementToReplace, subtractionElement){
    inputArray.forEach((element, index)=>{
        if (element === elementToReplace){
            inputArray[index] = subtractionElement;
        }
    })
    console.log(inputArray);
}
arrayReplace([1, 2, 1], 1, 3)