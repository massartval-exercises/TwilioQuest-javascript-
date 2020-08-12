function calculateMass(freightItems) {
let totalMass = 0;

totalMass = freightItems.reduce((sum, current) => sum + current.length, 0);

return totalMass;
}

const mass = calculateMass(['dog', 'donkey', 'cat']);
console.log('Total mass of items is ' + mass);  // should be 12

/* My first try (faulty .length in the wrong place) 

function calculateMass(freightItems) {
let totalMass = 0;

totalMass = freightItems.reduce((sum, current) => sum + current, 0).length;

return totalMass;
}

const mass = calculateMass(['dog', 'donkey', 'cat']);
console.log('Total mass of items is ' + mass);  // should be 12
*/