function vowelsCount(str) {
    let count = 0;
    const collectedVowels = ["a", "e", "i", "o", "u"];
    let normalizedString = str.toLowerCase();
    for (let char of normalizedString) {
        if (collectedVowels.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log(vowelsCount("apple"));