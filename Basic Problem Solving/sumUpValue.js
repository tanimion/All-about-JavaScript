function sumValue(arr) {
    sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}

sumValue([1, 2, 4, 6, 10, 20]);