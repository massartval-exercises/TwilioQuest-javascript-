function getFirstAmountSorted(inputArray,numberOfItems) {
    inputArray.sort();
    inputArray.slice(0,numberOfItems);

    return inputArray.slice();
} 


/* OR 

function getFirstAmountSorted(inputArray,numberOfItems) {
    inputArray.sort();
    

    return inputArray.slice(0,numberOfItems);
} 

*/