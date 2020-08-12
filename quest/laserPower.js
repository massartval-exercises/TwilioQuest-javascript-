function calculatePower(powerSettings) {
    let totalPower = 0;
    let powerAdjusted = [];
    
    powerAdjusted = powerSettings.map(item => item * 2);
    
    totalPower = powerAdjusted.reduce((sum, current) => sum + current, 0);

    return totalPower;
}


/* My first try (faulty .forEach)

function calculatePower(powerSettings) {
    let totalPower = 0;
    let powerAdjusted = [];
    
    powerAdjusted = powerSettings.forEach(function(element) {  
    element == element * 2;
    })
    totalPower = powerAdjusted.reduce((sum, current) => sum + current, 0);

    return totalPower;
}
*/