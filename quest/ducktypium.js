function testColor(color) {
    if (
        color !== 'red' &&
        color !== 'blue' &&
        color !== 'yellow'
    ) { 
        throw new Error('Illegal color detected! Must be red, blue or yellow.');
    }
}

class Ducktypium {
    constructor(color) {
        testColor(color);
        this.color = color;
        this.calibrationSequence = [];
    }
    refract(color) {
        testColor(color);
        if (color === this.color) {
            return this.color;
        } 
        const colorCombination = [color, this.color];
        if (
            colorCombination.includes('red') &&
            colorCombination.includes('blue')
        ) {
            return 'purple';
        }
        if (
            colorCombination.includes('red') &&
            colorCombination.includes('yellow')
        ) {
            return 'orange';
        }
        if (
            colorCombination.includes('yellow') &&
            colorCombination.includes('blue')
        ) {
            return 'green';
        }
    }
    calibrate(inputArray) {
        inputArray.sort();
        this.calibrationSequence = inputArray.map(element => {
            return element * 3;
        })
    }
}


/* My first try 

class Ducktypium {
    constructor(color) {
        color: color,
        calibrationSequence: '',
    }
    if (color === red) {

    } else if (color === blue) {

    } else if (color === yellow) {

    } 
    } else { throw <Error>;
    }

    refract (color) {
        if (color == false) {
            throw <Error>;
        }
        return ;
    }
    calibrate (array)
    let array = [];
    array.sort ;
    array.forEach(element {
        element = element * 3;
        array = new Ducktypium.calibrationSequence;
    })
return ;
}

*/