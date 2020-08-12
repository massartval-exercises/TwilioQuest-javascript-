// These lines of code take in the argument from the command line
const argumentValue = process.argv[2];
const treeLifeStatus = Number(argumentValue);

// Write your if statement below here!

if (argumentValue == 0) {
    console.log('alive');
} 
else if (argumentValue == 1) {
    console.log('flowering');
} 
else if (argumentValue == 2) {
    console.log('shedding');
} 
else {
 console.log('other');
}