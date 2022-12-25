// Finding maximum number
function max(arr) {
    maxNumber = arr[0];
    for (let num of arr) {
        if (num > maxNumber) {
            maxNumber = num;
        }
    }
    return maxNumber;
}

max([10, 20, 30, 40, 50]);

// Finding minimum number
function min(arr) {
    minNumber = arr[0];
    for (let num of arr) {
        if (num < minNumber) {
            minNumber = num;
        }
    }
    return minNumber;
}

min([10, 20, 30, 40, 50]);