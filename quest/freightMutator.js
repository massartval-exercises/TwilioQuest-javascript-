function mutate(freightItems) {
    let mutatedItems = [];

    mutatedItems = freightItems.map(element => element.toUpperCase());

    return mutatedItems
}

/* My first try (faulty .push, not necessary)

function mutate(freightItems) {
    let mutatedItems = [];

    mutatedItems = freightItems.map(element => element.toUpperCase());

    mutatedItems.push(element); 

   return mutatedItems
}
*/ 


