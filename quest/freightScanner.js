function scan(freightItems) {
    let contrabandCount = 0;
    freightItems.forEach(function(element) {
        if (element === 'contraband') { 
        contrabandCount ++;
        }
    })
    return contrabandCount;
}


/* 
function scan(words) {
    let instances = 0;
    words.forEach(function(word) {
        if (word === 'contraband') {
            instances++;
        }
    });
    return instances;
}
*/

/*
words == freightItems
instances == contrabandCount
*/
/* My first try */

/* function scan(freightItems) {
    let contrabandCount = 0;

    if (freightItems.this === 'contraband') { 
        contrabandCount ++;
    }

    freightItems.forEach(scan);

    return contrabandCount;
}
 */