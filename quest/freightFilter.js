function scanAndFilter(freightItems,forbiddenString) {
    let filteredItems = []; 

    freightItems.filter(function(element) {
        if (element !== forbiddenString)

        filteredItems.push(element);
    })


    return filteredItems;
}

/* let results = freightItems.filter(function(item) {
    // if true item is pushed to results and the iteration continues
    // returns empty array if nothing found
  });
  */