// Manual solutions
function arrChunk(arr, size) {
    let arrayChunk = [];
    for (element of arr) {
        let lastElement = arrayChunk[arrayChunk.length - 1];
        if (lastElement && lastElement.length < size) {
            lastElement.push(element);
        } else {
            arrayChunk.push([element]);
        }
    }
    console.log(arrayChunk);
}

arrChunk([1, 2, 3, 4, 5], 2);

// Alternate solutions
function arrayChunk(arr, size) {
    const arrChunk = [];
    let index = 0;
    while (index < arr.length) {
        const slicedArr = arr.slice(index, index + size);
        arrChunk.push(slicedArr);
        index += size;
    }
    return arrChunk;
}

console.log(arrayChunk([1, 2, 3, 4, 5], 2));