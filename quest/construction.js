/* My first try 

function construct(name, material, assemble, duration) {
    let person = {
    name: name,
    material: material,
    assemble: assemble,
    duration: duration,
    };
    return person;
}

*/

function construct(name) {
    let person = {
        name, 
        material: 'human',
        assemble: true,
        duration: 1000,
    }
    return person;
}

const somePerson = construct ('Kevin');
console.log('name is: ' + somePerson.name);
console.log('duration is: ' + somePerson.duration);