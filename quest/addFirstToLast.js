function addFirstToLast(inputArray) {
    let firstAndLAst = '';

    if (inputArray.length > 0) {
        firstAndLAst = inputArray [0] + inputArray.pop();
    }
    return firstAndLAst;
}
